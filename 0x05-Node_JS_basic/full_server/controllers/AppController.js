/**
 * Contains the miscellaneous route handlers.
 * @author Shola Onoriemu <https://github.com/pyshola>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
