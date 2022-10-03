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
 *                           username:
 *                               type: string
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
 */