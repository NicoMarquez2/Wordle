const express = require('express');
const db = require('../infraestructure/db')
const Sequelize = require('sequelize')
const Model = require('sequelize')
const DataTypes = require('sequelize');

const sequelieze = new Sequelize('wordle', 'postgres', 'testing', {
    dialect: 'postgres',
});

const User = sequelieze.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    createdAt: false,
    updatedAt: false,
    timestamps: false,    
})

module.exports = {User}