const express = require('express');
const db = require('../infraestructure/db')
const Sequelize = require('sequelize')
const Model = require('sequelize')
const DataTypes = require('sequelize');

const sequelieze = new Sequelize('wordle', 'postgres', 'testing', {
    dialect: 'postgres',
});

const UserStats = sequelieze.define('user_stats',{
    user_id: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    streak: DataTypes.BOOLEAN,
    streak_points: DataTypes.INTEGER
},{
    createdAt: false,
    updatedAt: false,
    timestamps: false,    
})

module.exports = {UserStats}