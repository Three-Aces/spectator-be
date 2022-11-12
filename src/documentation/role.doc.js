/**
 * @openapi
 * 
 * /role/assignRole:
 *      put:
 *          tags: [Role]
 *          summary: This helps to assign a new role to a user.
 *          description: Assign role
 *          requestBody:
 *              description: Assign new Role to user
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: string
 *                           role:
 *                               type: string 
 *          responses:
 *              200:
 *                  description: Successfully role updated!
 *              404:
 *                  description: Not Found
 * 
 */