const express = require('express');
const db = require('../infraestructure/db')
const Sequelize = require('sequelize')
const Model = require('sequelize')
const DataTypes = require('sequelize');

const sequelieze = new Sequelize('wordle', 'postgres', 'testing', {
    dialect: 'postgres',
});

const Word = sequelieze.define('words',{
    word: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
)

module.exports = {Word}