// __tests__/userController.test.js
import userController from '../../controllers/userController.js';
import User from '../../models/User.js';

jest.mock('../../models/User.js');

describe('User Controller', () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('saveUser', () => {
    it('should respond with 201 on success', async () => {
      mockReq = { body: { dummy: 'data' } };

      await userController.saveUser(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'User saved successfully' });
    });

    it('should respond with 500 on error', async () => {
      mockReq = { username: "foo" };
      mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
      userController.saveUser = jest.fn().mockImplementation((code) => {
       
        return mockRes
      });

      expect(mockRes.status).toHaveBeenCalledWith(500);
      });
    });

    describe('deleteOneUserById', () => {
      it('should delete user and return result', async () => {
        const mockUser = { id: '123', name: 'Test' };
        User.findByIdAndDelete.mockResolvedValue(mockUser);
        mockReq = { params: { id: ' 123 ' } };

        await userController.deleteOneUserById(mockReq, mockRes);

        expect(User.findByIdAndDelete).toHaveBeenCalledWith('123');
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'record deleted', result: mockUser });
      });

      it('should return 500 on deletion error', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('Delete failed'));
        mockReq = { params: { id: 'bad_id' } };

        await userController.deleteOneUserById(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Delete failed' });
      });
    });

    describe('createUser', () => {
      it('should create and respond with 201', async () => {
        const mockSave = jest.fn().mockResolvedValue();
        User.mockImplementation(() => ({ ...mockReq.body, save: mockSave }));

        mockReq = {
          body: {
            username: 'john',
            email: 'john@example.com',
            password: 'secure123',
          },
        };

        await userController.createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith({
          message: 'User saved successfully',
          newUser: expect.objectContaining(mockReq.body),
        });
      });

      it('should respond with 500 on save error', async () => {
        const mockSave = jest.fn().mockRejectedValue(new Error('Failed to save'));
        User.mockImplementation(() => ({ ...mockReq.body, save: mockSave }));
        mockReq = { body: { username: 'err' } };

        await userController.createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({
          message: 'Error saving user',
          error: 'Failed to save',
        });
      });
    });

    describe('getUsers', () => {
      it('should return all users', async () => {
        const mockUsers = [{ username: 'A' }, { username: 'B' }];
        User.find.mockResolvedValue(mockUsers);

        await userController.getUsers(mockReq, mockRes);

        expect(User.find).toHaveBeenCalledWith({});
        expect(mockRes.send).toHaveBeenCalledWith(mockUsers);
      });

      it('should return error message on failure', async () => {
        User.find.mockRejectedValue(new Error('Fetch fail'));

        await userController.getUsers(mockReq, mockRes);

        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Fetch fail' });
      });
    });
  });