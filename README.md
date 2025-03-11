
# OBS Widgets

This project contains a collection of custom widgets designed for use with OBS (Open Broadcaster Software). Each widget allows users to enhance their streaming experience with various functionalities.

## Widgets

### To Do List

A simple To Do List widget that allows users to add, complete, and delete tasks, with the option to delete tasks on click.

> IMPORTANT: The form for this available, when hovering bottom left of the page.

#### Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Option to delete tasks on click

#### File Structure

- `index.html`: The main HTML file that contains the structure of the To Do List widget.
- `styles.css`: The CSS file that contains the styles for the To Do List widget.
- `scripts.js`: The JavaScript file that contains the logic for adding, completing, and deleting tasks.
- `global.css`: The global CSS file that contains shared styles for the project.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to view and interact with the To Do List widget.
3. Add tasks using the input field and "ADD" button.
4. Mark tasks as completed by checking the checkbox next to each task.
5. Delete tasks by enabling the "DELETE on click" option and clicking on the task.

### Importing into OBS

1. Open OBS and navigate to the scene where you want to add the widget.
2. Click the "+" button under the "Sources" panel and select "Browser".
3. In the "Create/Select Source" window, give your source a name and click "OK".
4. In the "Properties" window, check the "Local File" box and click "Browse".
5. Navigate to the location of the `index.html` file and select it.
6. Adjust the width and height to fit your scene and click "OK".
7. Use "Interact" to make changes with the widget.

## Customization

You can customize the styles and behavior of the widgets by editing the respective CSS and JavaScript files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.