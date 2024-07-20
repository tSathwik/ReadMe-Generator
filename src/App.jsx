import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { saveAs } from "file-saver";
import "./App.css";
import { RefreshCircleOutline, ArrowDownCircleOutline } from "react-ionicons";

const App = () => {
  const [readmeContent, setReadmeContent] = useState("");

  const handleButtonClick = (markdown) => {
    setReadmeContent((prevContent) => prevContent + markdown);
  };

  const saveReadme = () => {
    const blob = new Blob([readmeContent], {
      type: "text/markdown;charset=utf-8",
    });
    saveAs(blob, "README.md");
  };

  const reset = () => {
    setReadmeContent("");
  };

  return (
    <>
      <div className="nav">
        <h2>Readme Generator</h2>
        <span className="nav-icons">
          <RefreshCircleOutline
            color={"#ffffff"}
            title={"Reset"}
            height="40px"
            width="40px"
            onClick={reset}
          />
          <ArrowDownCircleOutline
            color={"#ffffff"}
            title={"Download"}
            height="40px"
            width="40px"
            onClick={saveReadme}
          />
        </span>
      </div>

      <div className="container">
        <div className="btns">
          {/* <button className="reset-button" onClick={reset}>
            Reset
          </button> */}
          <button
            onClick={() =>
              handleButtonClick(
                "# Project Title\nA brief description of what this project does...\n\n"
              )
            }
          >
            Title and Description
          </button>

          <button
            onClick={() =>
              handleButtonClick(
                "## Acknowledgements\n- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)\n- [Awesome README](https://github.com/matiassingers/awesome-readme)\n- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)\n\n"
              )
            }
          >
            Acknowledgements
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Appendix\nAny additional information goes here\n\n"
              )
            }
          >
            Appendix
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Authors\n- [@octokatherine](https://www.github.com/octokatherine)\n\n"
              )
            }
          >
            Authors
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Badges\nAdd badges from somewhere like: [shields.io](https://shields.io/)\n\n[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)\n[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)\n[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)\n\n"
              )
            }
          >
            Badges
          </button>
          <button onClick={() => handleButtonClick("```\nCode Block\n```\n")}>
            Code Block
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Contributing\nContributions are always welcome!\n\nSee `contributing.md` for ways to get started.\n\nPlease adhere to this project's `code of conduct`.\n\n"
              )
            }
          >
            Contributing
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Deployment\nTo deploy this project run\n\n```bash\nnpm run deploy\n```\n\n"
              )
            }
          >
            Deployment
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Documentation\n\n[Documentation](https://linktodocumentation)\n\n"
              )
            }
          >
            Documentation
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Environment Variables\n\nTo run this project, you will need to add the following environment variables to your .env file:\n\n- `API_KEY`\n- `ANOTHER_API_KEY`\n\n"
              )
            }
          >
            Environment Variables
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## FAQ\n\n#### Question 1\n\nAnswer 1\n\n#### Question 2\n\nAnswer 2\n\n"
              )
            }
          >
            FAQ's
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Features\n\n- Light/dark mode toggle\n- Live previews\n- Fullscreen mode\n- Cross platform\n\n"
              )
            }
          >
            Features
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Installation\n\nInstall my-project with npm\n```bash\n  npm install my-project\n  cd my-project\n```\n\n"
              )
            }
          >
            Installation
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## License\n\n[MIT](https://choosealicense.com/licenses/mit/)\n\n"
              )
            }
          >
            License
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Logo\n\n![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)\n\n"
              )
            }
          >
            Logo
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Optimizations\nWhat optimizations did you make in your code? E.g. refactors, performance improvements, accessibility\n\n"
              )
            }
          >
            Optimizations
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Related\nHere are some related projects\n- [Awesome Project 1](https://github.com/username/project1)\n- [Awesome Project 2](https://github.com/username/project2)\n\n"
              )
            }
          >
            Related
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Roadmap\n- [ ] Add additional features\n- [ ] Improve documentation\n- [ ] Submit for code review\n\n"
              )
            }
          >
            Roadmap
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Run Locally\nTo run this project locally, follow these steps\n\n1. Clone the project\n```bash\ngit clone https://github.com/username/project.git\n```\n\n2. Go to the project directory\n```bash\ncd project\n```\n\n3. Install dependencies\n```bash\nnpm install\n```\n\n4. Start the server\n```bash\nnpm start\n```\n\n"
              )
            }
          >
            Run Locally
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Screenshots\n![App Screenshot](https://via.placeholder.com/150)\n\n"
              )
            }
          >
            Screenshots
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Support\nFor support, email [support@example.com](mailto:support@example.com) or join our Slack channel.\n\n"
              )
            }
          >
            Support
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Usage/Examples\n```javascript\nimport { myFunction } from 'my-project';\n\nmyFunction();\n```\n\n"
              )
            }
          >
            Usage/Examples
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "## Running Tests\nTo run tests, run the following command\n\n```bash\nnpm run test\n```\n\n"
              )
            }
          >
            Running Tests
          </button>
          {/* <button onClick={saveReadme} className="download-button">
            Download README
          </button> */}
        </div>
        <div className="text-container">
          <div className="editor-container">
            <span style={{ marginLeft: "2%" }}>Editor</span>
            <div className="editor">
              <textarea
                value={readmeContent}
                onChange={(e) => setReadmeContent(e.target.value)}
              />
            </div>
          </div>
          <div className="preview-container">
            <span style={{ marginLeft: "2%" }}>Preview</span>
            <div className="preview">
              <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
