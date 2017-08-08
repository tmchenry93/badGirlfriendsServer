module.exports = function(sequelize, DataTypes) {
	var Score = sequelize.define("Score", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		girlfriend: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		playername: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	});
	return Score;
};