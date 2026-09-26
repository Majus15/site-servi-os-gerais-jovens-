*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
}

/* Cadastro */

#cadastro{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:linear-gradient(135deg,#4b6cb7,#182848);
    color:white;
}

#cadastro h1{
    margin-bottom:15px;
}

#cadastro p{
    margin-bottom:20px;
}

#cadastro input{
    width:320px;
    padding:12px;
    margin:8px;
    border:none;
    border-radius:8px;
    font-size:16px;
}

#cadastro button{
    margin-top:15px;
    width:320px;
    padding:12px;
    border:none;
    border-radius:8px;
    background:#28a745;
    color:white;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

#cadastro button:hover{
    background:#218838;
}

/* Página Principal */

header{
    background:#4b6cb7;
    color:white;
    text-align:center;
    padding:25px;
}

header h1{
    margin-bottom:10px;
}

.container{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:25px;
    padding:30px;
}

.card{
    background:white;
    width:260px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
    text-align:center;
    padding:20px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.card img{
    width:100px;
    height:100px;
    border-radius:50%;
    object-fit:cover;
    margin-bottom:15px;
}

.card h2{
    margin-bottom:10px;
}

.card p{
    margin:6px 0;
}

.card button{
    margin-top:12px;
    background:#28a745;
    color:white;
    border:none;
    padding:10px 20px;
    border-radius:8px;
    cursor:pointer;
    font-size:16px;
    transition:.3s;
}

.card button:hover{
    background:#218838;
}

@media(max-width:768px){

.container{
    flex-direction:column;
    align-items:center;
}

#cadastro input,
#cadastro button{
    width:90%;
}

}
