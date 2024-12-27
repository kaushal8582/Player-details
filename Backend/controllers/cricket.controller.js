const Player = require("../models/cricket.model.js");

module.exports.addPlayer = async (req, res) => {
  const {
    name,
    age,
    photourl,
    birthplace,
    numberofmatches,
    career,
    score,
    fifties,
    centuries,
    wickets,
    average,
  } = req.body;
  try {
    const player = await Player.create({
      name: name,
      age: age,
      photourl: photourl,
      birthplace: birthplace,
      numberofmatches: numberofmatches,
      career: career,
      score: score,
      fifties: fifties,
      centuries: centuries,
      wickets: wickets,
      average: average,
    });
    res.status(201).json({ message: "Add successfully", data: player });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.findPlayer = async (req, res) => {
  const {name} = req.body;
  console.log(name,"name")
  try {
    const player = await Player.findOne({ where: { name: name } });
    console.log(player)
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.updatePlayer = async (req, res) => {
  const {
    id,
    name,
    age,
    photourl,
    birthplace,
    numberofmatches,
    career,
    score,
    fifties,
    centuries,
    wickets,
    average,
  } = req.body;

  const player = await Player.findOne({ where: { id: id } });
    if (!player) {
        return res.status(404).json({ message: "Player not found" });
    }

    player.name = name?name:player.name;
    player.age = age?age:player.age;
    player.photourl = photourl?photourl:player.photourl;
    player.birthplace = birthplace?birthplace:player.birthplace;
    player.numberofmatches = numberofmatches?numberofmatches:player.numberofmatches;
    player.career = career?career:player.career;
    player.score = score?score:player.score;
    player.fifties = fifties?fifties:player.fifties;
    player.centuries = centuries?centuries:player.centuries;
    player.wickets = wickets?wickets:player.wickets;
    player.average = average?average:player.average;
    
    await player.save();

    res.status(200).json({ message: "Update successfully", data: player });


};
