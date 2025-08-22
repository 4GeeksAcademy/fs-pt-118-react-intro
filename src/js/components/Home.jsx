import React from "react";
//importacion cuando hacemos export defult 
import Footer from './Footer'
//importacion cuando hacer export const 
import { Card } from './Card'
import MyError from './Error'
//create your first component
const Home = () => {


		/*
		REGLAS de componentes 
		- Son reutilizables
		- Siempre se tiene que exportar el componente e importar en donde queramos que se muestre
		- Para que se muestre el componente lo llamamos como una etiqueta html que se cierra a si misma, ej: <MiComponente/> 
		- Representan un algo especifico, el navbar, el footer, la tarjeta, el jumbotron, etc... pero tambien pueden ser componente 
		que usen a otros componentes para cumplir su funcion, ej:
			imaginemos una seccion de portfolio, esta seccion seria un componente que seria como un espacio donde mostrar nuestros proyectos...
			Ahora, estos proyectos los vamos a mostramos en un componente Card, asi que, portfolio importaria a Card para mostrar su contenido
		- Todo es un componente en React, pero tampoco tenemos que abusar de la componetizacion, la idea es que ayude 
		al desarrollo, no que sea un problema

		*/






	const name = 'Maria'
	const user = {
		name: 'Pepe'
	}

	if (4 < 5) {
		console.log('es menor')
	}

	const sum = (a, b) => {
		return a + b
	}

	const sayHiToUser = (name) => {
		return `Welcome ${name}, have fun!`
	}


	const simpleUserArr = ['pepe', 'lola', 'maria', 'matia'];
	const userList = [{ id: 1, name: 'pepe', age: 55 }, { id: 2, name: 'Lola', age: 22 }, { id: 3, name: 'Barbara', age: 33 }]
	simpleUserArr.forEach(el => console.log('foreach ', el));
	simpleUserArr.map(el => console.log('map ', el));

	for (let el of simpleUserArr) {
		console.log('for of', el)
	}

	for (let i in simpleUserArr) {
		console.log('for in ', i)
	}

	for (let i = 0; i < simpleUserArr.length; i++) {
		console.log('clasico, ', i)
	}


	return (
		<div className="text-center bg-dark text-white">
			{/* cada vez que queramos utilizar JS en el retorno, tenemos que si o si, usar {} */}
			{console.log('pepe')}
			{/* llamaos a una variable en el retorno del componente para mostrarla en el html */}
			<p>
				el nombre es {name}
			</p>
			{/* llamaos la propiedad de un objeto en el retorno del componente para mostrarla en el html */}
			<p>
				el nombre es {user.name}
			</p>
			{/* en el retorno, NO pueden haber if, solo ternarias */}
			<p>
				{4 < 5 ? 'es menor' : 'es mayor'}
			</p>
			{/* ejecucion de funciones */}
			<p>{sum(2, 20)}</p>
			<p>{sayHiToUser('Barbara')}</p>

			{/* utilizando MAP para generar contenido dinamicamente en la pagina */}
			{/*  el key prop es para que react pueda identificar sin que encontremos comportamientos raros a los elementos */}
			{simpleUserArr.map((el, index) => <div key={index} className="card">
				<div className="card-header">
					<h2 className="card-title">
						Usuario! map de array de strings
					</h2>
				</div>
				<div className="card-body">
					{el}
				</div>
			</div>)}


<Card/>
{/* como los componentes son reutilizables, podemos llamarlos tantas veces como lo necesitemos */}
<div className="row">
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	<div className="col-sm-12 col-md-6 col-lg-4">
		<Card/>
	</div>
	
</div>



			{/* NO FUNCIONA, FOREACH NO RETORNA  */}
			{console.log(simpleUserArr.forEach(el => {
				return (<div className="card">
					<div className="card-header">
						<h2 className="card-title">
							Usuario!
						</h2>
					</div>
					<div className="card-body">
						{el}
					</div>
				</div>)
			}))}


			{/* mapeo de un array de objeto que devuelve una estructura HTML (card) */}
			{/*  el key prop es para que react pueda identificar sin que encontremos comportamientos raros a los elementos */}

			{userList.map(el => <div key={el.id} className="card">
				<div className="card-header">
					<h2 className="card-title">
						Usuario! map de array de objetos
					</h2>
				</div>

				<div className="card-body">
					<p>
						Name: {el.name}
					</p>
					<p>
						Age: {el.age}
					</p>
				</div>
			</div>)}
			<MyError/>
			<Footer />
		</div>
	);
};

export default Home;