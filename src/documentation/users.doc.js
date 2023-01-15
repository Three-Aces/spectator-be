/**
 * @openapi
 * 
 * /users:
 *      get:
 *          tags: [Users]
 *          summary: It lists all users of the application
 *          description: It helps to list all application users
 * 
 *          responses:
 *                  200:
 *                     description: users retrieved succesfully
 *                  400:
 *                     description: bad request
 *                  409:
 *                     description: user already verified
 *                  500:
 *                     description: Internal server error
 * 
 * /users/parents:
 *      get:
 *          tags: [Users]
 *          summary: This list all Parent users of the application.
 *          description: List all users who are Parents
 * 
 *          responses:
 *              200:
 *                  description: Parents retrieved successfully!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 * /users/teachers:
 *      get:
 *          tags: [Users]
 *          summary: This list all Teacher users of the application.
 *          description: List all users who are Teacher
 * 
 *          responses:
 *              200:
 *                  description: Parents retrieved successfully!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 */
