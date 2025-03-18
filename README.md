# OBS Widgets

This project contains a collection of custom widgets designed for use with OBS (Open Broadcaster Software). Each widget allows users to enhance their streaming experience with various functionalities.

## Widgets

### To Do List - [Try it!](https://daglia.github.io/obs-widgets/widgets/to-do-list/)

A simple To Do List widget that allows users to add, complete, and delete tasks, with the option to delete tasks on click.

> IMPORTANT: The form for this is available when hovering at the bottom left of the page.

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

---

### Pomodoro Timer - [Try it!](https://daglia.github.io/obs-widgets/widgets/pomodoro/)

A Pomodoro Timer widget that helps users manage their work and break intervals effectively.

#### Features

- 25-minute work timer
- 5-minute break timer
- Start/Pause functionality
- Audio beep notification when the timer ends

#### File Structure

- `index.html`: The main HTML file that contains the structure of the Pomodoro Timer widget.
- `styles.css`: The CSS file that contains the styles for the Pomodoro Timer widget.
- `scripts.js`: The JavaScript file that contains the logic for the timer functionality.
- `global.css`: The global CSS file that contains shared styles for the project.

---

### Sliding Text - [Try it!](https://daglia.github.io/obs-widgets/widgets/sliding-text/)

A Sliding Text widget that allows users to display scrolling text on their stream.

#### Features

- Editable text input
- Smooth scrolling animation
- Text persists across sessions using local storage

#### File Structure

- `index.html`: The main HTML file that contains the structure of the Sliding Text widget.
- `styles.css`: The CSS file that contains the styles for the Sliding Text widget.
- `scripts.js`: The JavaScript file that contains the logic for updating and saving the text.
- `global.css`: The global CSS file that contains shared styles for the project.

---

## Usage

1. Clone the repository to your local machine.
2. Open the respective `index.html` file in your web browser to view and interact with the widget.

### Importing into OBS

1. Open OBS and navigate to the scene where you want to add the widget.
2. Click the "+" button under the "Sources" panel and select "Browser".
3. In the "Create/Select Source" window, give your source a name and click "OK".
4. In the "Properties" window, check the "Local File" box and click "Browse".
5. Navigate to the location of the `index.html` file for the desired widget and select it.
6. Adjust the width and height to fit your scene and click "OK".
7. Use "Interact" to make changes with the widget.

## Customization

You can customize the styles and behavior of the widgets by editing the respective CSS and JavaScript files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
