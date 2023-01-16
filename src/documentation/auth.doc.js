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
 * 
 * 
 * 
 * /auth/verify/{token}:
 *      get:
 *          tags: [Authentication]
 *          description: It helps to verify user
 *          parameters:
 *              - name: token
 *                in: path
 *                description: Registration token
 *                required: true
 * 
 *          responses:
 *                  200:
 *                     description: user verified succesfully
 *                  400:
 *                     description: bad request
 *                  409:
 *                     description: user already verified
 *                  500:
 *                     description: Internal server error
 * 
 * /auth/signout:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Authentication]
 *          description: Logout the user
 *          summary: It helps to logout the user
 *          responses:
 *                  200:
 *                     description: user logged out succesfully
 *                  500:
 *                     description: Internal server error
 * 
 * /users/profile:
 *      put:
 *          security:
 *              - BearerToken: []
 *          tags: [Profile]
 *          description: Update user profile
 *          summary: it helps to update user profile
 *          requestBody:
 *            content:
 *               multipart/form-data:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      sex:
 *                        type: string
 *                        example: 'male, female, others'
 *                      phone:
 *                        type: string
 *                      profile_image:
 *                        type: string
 *                        format: binary
 *                      country:
 *                        type: string
 *                        example: 'Rwanda'
 *          responses:
 *                  200:
 *                     description: profile updated succesfully
 *                  400:
 *                     description: bad request
 *                  500:
 *                     description: Internal server error
 *                        
 *                 
 *                 
 *                  
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Profile]
 *          description: It helps to get user profile
 * 
 *          responses:
 *                  200:
 *                     description: profile retrieved succesfully
 *                  400:
 *                     description: bad request
 *                  500:
 *                     description: Internal server error
 * 
 * /auth/forgot-password:
 *      post:
 *          tags: [Authentication]
 *          summary: This helps to request reset a password.
 *          description: Request password reset!
 *          requestBody:
 *              description: Provide an Email
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: string
 *          responses:
 *              200:
 *                  description: Email to reset sent!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 * 
 * 
 * /auth/reset-password/{token}:
 *      post:
 *          tags: [Authentication]
 *          summary: This helps to provide a new password.
 *          description: Provide new password for resetting!
 *          parameters:
 *              - name: token
 *                in: path
 *                required: true
 *          requestBody:
 *              description: Provide an Email
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           newPassword:
 *                               type: string
 *                           confirmPassword:
 *                               type: string
 *          responses:
 *              200:
 *                  description: Password updated successfully!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 * 
 */
