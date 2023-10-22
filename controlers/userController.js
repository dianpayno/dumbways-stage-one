
const { Sequelize, QueryTypes} = require("sequelize");
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);
const { user } = require('../models');
const bcrypt = require('bcrypt'); //bcrypt import
const saltRounds = 10;


//User handling
const addUser = async  (req, res)=>{
    try{
        
        const {name, email, password}= req.body;
        await bcrypt.hash(password, saltRounds, (err, hashPassword)=>{
            const query = `INSERT INTO users (
                name,
                email,
                password,
                "createdAt",
                "updatedAt"
                ) VALUES (
                '${name}',
                '${email}',
                '${hashPassword}',
                 NOW(),
                NOW()
                     )`;
            sequelize.query(query);
        });
        res.redirect('/login');
    }
    catch (error) {
        console.log(error, '<< cannot add user')
    }
 }

 const userLogin = async (req, res)=>{
    try {
        const {email, password}= req.body;
        const obj = await user.findOne({where : {email :`${email}`}});
        // const query = `SELECT * FROM users WHERE email = '${email}'`
        //  let obj = await sequelize.query(query, { type: QueryTypes.SELECT })
        if(obj===null){
            req.flash('danger', "email belum terdaftar");
            return res.redirect('/login');
        }
        await bcrypt.compare(password, obj.password, (err, result)=>{
            if(result){
                req.session.isLogin = true;
                req.session.user = obj.name;
                req.session.idUser = obj.id,
                req.flash('success', ' login success');
                return res.redirect('/');
            } 
            else{
                req.flash('danger', 'password wrong');
                return res.redirect('/login');
            }
        })

    } catch (error) {
        console.log(error, '<< user not found')
    }
 }

 const login = (req, res)=>{
    res.render("login");
}
const register = (req, res)=>{
    res.render("register");
}

const logout = (req, res)=>{
    req.session.destroy();
    res.redirect('/login')

    }

 module.exports ={addUser,userLogin, login, register, logout}