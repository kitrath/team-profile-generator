const ProfileGenerator = require("./lib/ProfileGenerator");
const renderHTML = require("./src/baseTemplate");

const teamProfileGenerator = new ProfileGenerator(renderHTML);

teamProfileGenerator.init();