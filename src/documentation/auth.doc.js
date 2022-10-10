/**
 * @openapi
 * 
 * /auth/signup:
 *      post:
 *          tags: [Authentication]
 *          summary: This helps to register a new user.
 *          description: Teacher, Parent, Patron, Matron, DoS, DoD, and Head Teacher registration!
 *          requestBody:
 *              description: Register a new User
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: string
 *                           phone:
 *                               type: string
 *                           password:
 *                               type: string 
 *          responses:
 *              201:
 *                  description: Successfully user craeted!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 * 
 * 
 * /auth/login:
 *      post:
 *          tags: [Authentication]
 *          summary: This helps to login as a user.
 *          description: Teacher, Parent, Patron, Matron, DoS, DoD, and Head Teacher registration!
 *          requestBody:
 *              description: login
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: string
 *                           password:
 *                               type: string 
 *          responses:
 *              200:
 *                  description: Successfully user logged in!
 *              400:
 *                  description: Bad request
 *              404: 
 *                  description: Not Found
 *              500:
 *                  description: Internal server error!
 */
