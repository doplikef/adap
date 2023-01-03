const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'fbe9a31d-92e9-42c5-bc00-c5a4e4a06039'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
