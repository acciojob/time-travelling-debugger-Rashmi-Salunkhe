//your JS code here. If required.
  // Ensure DOM is fully loaded before running the script
        document.addEventListener("DOMContentLoaded", function() {

            // Function to log the current call stack simulation
            function logOutput(message) {
                const outputDiv = document.getElementById('output');
                if (outputDiv) {
                    outputDiv.textContent += message + '\n';
                } else {
                    console.error("Output element not found!");
                }
            }

            // Function 1
            function firstFunction() {
                logOutput("Call: firstFunction() -> Adding firstFunction to the stack");
                secondFunction();
                logOutput("Return: firstFunction() -> Removing firstFunction from the stack");
            }

            // Function 2
            function secondFunction() {
                logOutput("Call: secondFunction() -> Adding secondFunction to the stack");
                thirdFunction();
                logOutput("Return: secondFunction() -> Removing secondFunction from the stack");
            }

            // Function 3
            function thirdFunction() {
                logOutput("Call: thirdFunction() -> Adding thirdFunction to the stack");
                logOutput("Return: thirdFunction() -> Removing thirdFunction from the stack");
            }

            // Start the execution
            logOutput("Starting execution -> Adding main to the stack");
            firstFunction();
            logOutput("Program finished -> Removing main from the stack");

        });
