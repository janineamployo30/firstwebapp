const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write("Name: Janine C. Amployo\n");
    res.write("Section: BSIT BA-4102\n");
    res.write("My Life Verse: 1 Corinthians 10:31 NIV\n");
    res.write("31 So whether you eat or drink or whatever you do, do it all for the glory of God.");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
