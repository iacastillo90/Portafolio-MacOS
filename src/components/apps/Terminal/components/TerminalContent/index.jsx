import React from "react";
import HowDare from '../HowDare/index';

// Mock terminal data structure
const terminalConfig = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "cv",
        title: "cv.txt",
        type: "file",
        content: "Hi! I am a developer. Welcome to my portfolio! Here you will find my work experience and skills."
      }
    ]
  },
  {
    id: "projects",
    title: "projects",
    type: "folder",
    children: [
      {
        id: "portfolio",
        title: "portfolio.md",
        type: "file",
        content: "MacOS styled portfolio built with React and TailwindCSS."
      },
      {
        id: "terminal",
        title: "terminal.js",
        type: "file",
        content: "An awesome web-based terminal simulator."
      }
    ]
  },
  {
    id: "photos",
    title: "photos",
    type: "folder",
    children: [
      {
        id: "profile",
        title: "profile.jpg",
        type: "file",
        content: "[Image content: Imagine a nice photo of me!]"
      }
    ]
  },
  {
    id: "readme",
    title: "README.md",
    type: "file",
    content: "Welcome to my terminal! Type 'help' to see available commands."
  }
];

class TerminalContent extends React.Component {
  constructor(props) {
    super(props);
    this.history = [];
    this.curHistory = 0;
    this.curInputTimes = 0;
    this.curDirPath = [];
    this.curChildren = terminalConfig;
    
    this.state = {
      content: [],
      rmrf: false
    };
    
    this.commands = {
      cd: this.cd,
      ls: this.ls,
      cat: this.cat,
      clear: this.clear,
      help: this.help
    };
  }

  componentDidMount() {
    this.reset();
    this.generateInputRow(this.curInputTimes);
  }

  reset = () => {
    this.setState({ content: [] });
  };

  addRow = (row) => {
    this.setState((prevState) => {
      if (prevState.content.find((item) => item.key === row.key)) return null;
      return { content: [...prevState.content, row] };
    });
  };

  getCurDirName = () => {
    if (this.curDirPath.length === 0) return "~";
    else return this.curDirPath[this.curDirPath.length - 1];
  };

  getCurChildren = () => {
    let children = terminalConfig;
    for (const name of this.curDirPath) {
      const folder = children.find(item => item.title === name && item.type === "folder");
      if (folder) children = folder.children;
    }
    return children;
  };

  cd = (args) => {
    if (args === undefined || args === "~") {
      this.curDirPath = [];
      this.curChildren = terminalConfig;
    } else if (args === ".") {
      return;
    } else if (args === "..") {
      if (this.curDirPath.length === 0) return;
      this.curDirPath.pop();
      this.curChildren = this.getCurChildren();
    } else {
      const target = this.curChildren.find((item) => item.title === args && item.type === "folder");
      if (target === undefined) {
        this.generateResultRow(
          this.curInputTimes,
          <span>{`cd: no such file or directory: ${args}`}</span>
        );
      } else {
        this.curChildren = target.children;
        this.curDirPath.push(target.title);
      }
    }
  };

  ls = () => {
    const result = [];
    for (const item of this.curChildren) {
      result.push(
        <span
          key={`terminal-result-ls-${this.curInputTimes}-${item.id}`}
          className={`${item.type === "file" ? "text-white" : "text-purple-400 font-bold"}`}
        >
          {item.title}
        </span>
      );
    }
    this.generateResultRow(
      this.curInputTimes,
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2 mt-1 mb-1">{result}</div>
    );
  };

  cat = (args) => {
    const file = this.curChildren.find((item) => item.title === args && item.type === "file");

    if (file === undefined) {
      this.generateResultRow(
        this.curInputTimes,
        <span>{`cat: ${args}: No such file or directory`}</span>
      );
    } else {
      this.generateResultRow(this.curInputTimes, <span className="whitespace-pre-wrap">{file.content}</span>);
    }
  };

  clear = () => {
    this.curInputTimes += 1;
    this.reset();
  };

  help = () => {
    const help = (
      <ul className="list-disc ml-6 pb-1.5 mt-1">
        <li>
          <span className="text-red-400">cat {"<file>"}</span> - See the content of {"<file>"}
        </li>
        <li>
          <span className="text-red-400">cd {"<dir>"}</span> - Move into {"<dir>"}, "cd .." to move to the parent directory, "cd" or "cd ~" to return to root
        </li>
        <li>
          <span className="text-red-400">ls</span> - See files and directories in the current directory
        </li>
        <li>
          <span className="text-red-400">clear</span> - Clear the screen
        </li>
        <li>
          <span className="text-red-400">help</span> - Display this help menu
        </li>
        <li>
          <span className="text-red-400">rm -rf /</span> - :)
        </li>
        <li>
          press <span className="text-red-400">up arrow / down arrow</span> - Select history commands
        </li>
        <li>
          press <span className="text-red-400">tab</span> - Auto complete
        </li>
      </ul>
    );
    this.generateResultRow(this.curInputTimes, help);
  };

  autoComplete = (text) => {
    if (text === "") return text;

    const input = text.split(" ");
    const cmd = input[0];
    const args = input[1];

    let result = text;

    if (args === undefined) {
      const guess = Object.keys(this.commands).find((item) => item.startsWith(cmd));
      if (guess !== undefined) result = guess;
    } else if (cmd === "cd" || cmd === "cat") {
      const type = cmd === "cd" ? "folder" : "file";
      const guess = this.curChildren.find((item) => item.type === type && item.title.startsWith(args));
      if (guess !== undefined) result = `${cmd} ${guess.title}`;
    }
    return result;
  };

  keyPress = (e) => {
    const keyCode = e.key;
    const inputElement = document.querySelector(`#terminal-input-${this.curInputTimes}`);
    if (!inputElement) return;

    const inputText = inputElement.value.trim();
    const input = inputText.split(" ");

    if (keyCode === "Enter") {
      this.history.push(inputText);
      const cmd = input[0];
      const args = input[1];

      inputElement.setAttribute("readonly", "true");

      if (inputText.substring(0, 6) === "rm -rf") {
        this.setState({ rmrf: true });
      } else if (cmd && Object.keys(this.commands).includes(cmd)) {
        this.commands[cmd](args);
      } else if (cmd) {
        this.generateResultRow(
          this.curInputTimes,
          <span>{`zsh: command not found: ${cmd}`}</span>
        );
      }

      this.curHistory = this.history.length;
      this.curInputTimes += 1;
      this.generateInputRow(this.curInputTimes);
    } else if (keyCode === "ArrowUp") {
      if (this.history.length > 0) {
        if (this.curHistory > 0) this.curHistory--;
        const historyCommand = this.history[this.curHistory];
        inputElement.value = historyCommand;
      }
    } else if (keyCode === "ArrowDown") {
      if (this.history.length > 0) {
        if (this.curHistory < this.history.length) this.curHistory++;
        if (this.curHistory === this.history.length) inputElement.value = "";
        else {
          const historyCommand = this.history[this.curHistory];
          inputElement.value = historyCommand;
        }
      }
    } else if (keyCode === "Tab") {
      inputElement.value = this.autoComplete(inputText);
      e.preventDefault();
    }
  };

  focusOnInput = () => {
    const input = document.querySelector(`#terminal-input-${this.curInputTimes}`);
    if (input) input.focus();
  };

  generateInputRow = (id) => {
    const newRow = (
      <div key={`terminal-input-row-${id}`} className="flex w-full items-center mt-1">
        <div className="w-max flex flex-row space-x-1.5 mr-2">
          <span className="text-yellow-200">
            @visitor <span className="text-green-300">{this.getCurDirName()}</span>
          </span>
          <span className="text-red-400">{">"}</span>
        </div>
        <input
          id={`terminal-input-${id}`}
          className="flex-1 px-1 text-white outline-none bg-transparent w-full"
          onKeyDown={this.keyPress}
          autoFocus={true}
          autoComplete="off"
        />
      </div>
    );
    this.addRow(newRow);
  };

  generateResultRow = (id, result) => {
    const newRow = (
      <div key={`terminal-result-row-${id}`} className="break-words w-full">
        {result}
      </div>
    );
    this.addRow(newRow);
  };

  render() {
    return (
      <div
        className="terminal relative h-full w-full bg-gray-900/90 overflow-y-auto text-white text-sm font-mono p-3 rounded-none shadow-lg"
        onClick={this.focusOnInput}
      >
        {this.state.rmrf && (
          <HowDare setRMRF={(value) => this.setState({ rmrf: value })} />
        )}
        <div className="py-2 px-1.5 mb-2 border-b border-gray-700">
          <span className="text-green-400 font-bold">Welcome to Mac OS Terminal</span>
          <br/>
          <span className="text-green-300">help</span>: Type `help` to get started. Navigate through my projects and CV using `cd` and `ls`.
        </div>
        <div id="terminal-content" className="px-1.5 pb-2">
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default TerminalContent;
