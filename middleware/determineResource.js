const Algorithm = require("../models/AlgorithmsModel");
const Architecture = require("../models/ArchitectureModel");
const Database = require("../models/DatabaseModel");
const Language = require("../models/LanguageModel");
const Mathematics = require("../models/MathematicsModel");
const Ai = require("../models/AIModel");

const fetchOneResource = async (discipline, id) => {
  //   console.log(discipline, repository, thread);
  // const repoThreads = await Thread.find({ repositoryLink: repository });
  let whichDomain = "";

  switch (discipline) {
    case "languages":
      whichDomain = Language;
      break;
    case "mathematics":
      whichDomain = Mathematics;
      break;
    case "databases":
      whichDomain = Database;
      break;
    case "architecture":
      whichDomain = Architecture;
      break;
    case "algorithms-and-data-structures":
      whichDomain = Algorithm;
      break;
    case "artificial-intelligence":
      whichDomain = Ai;
      break;
    default:
  }
  console.log(whichDomain);

  let resource = await whichDomain.findById({ _id: id });

  //   console.log(resource);

  return resource;
};

module.exports = fetchOneResource;
