/**
 * @openapi
 * 
 * /parent/students:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Parent]
 *          summary: This helps Parent to list his/her students.
 *          description: Parent get students
 * 
 *          responses:
 *              200:
 *                  description: students retrieved successfully!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 */