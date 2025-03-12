const { execSync } = require("child_process");

test("CLI prints a motivational quote", () => {
    const output = execSync("node index.js").toString().trim();
    expect(output.length).toBeGreaterThan(0);
});

