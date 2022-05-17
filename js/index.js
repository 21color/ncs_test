window.onload = () => {
	class MakeJumsu {
		constructor(person) {
			this.person = person;
			this.personArray = [
				{
					no: 1,
					name: '우디',
					imgUrl: '../img/no1.png',
					imgalt: 'wodie',
					language: 60,
					english: 90,
					math: 82,
				},
				{
					no: 2,
					name: '제시',
					imgUrl: '../img/no2.png',
					imgalt: 'jessie',
					language: 84,
					english: 95,
					math: 54,
				},
				{
					no: 3,
					name: '버즈',
					imgUrl: '../img/no3.png',
					imgalt: 'buzz',
					language: 55,
					english: 70,
					math: 100,
				},
			];
		}
		makePersonInformation() {
			this.personArray.forEach((value, index) => {
        const jumsu = [value.math, value.language, value.english];
        console.log(jumsu)
        const total = jumsu.reduce((accumalator, current) => accumalator + current, 0);
        const avg = Math.floor(jumsu.reduce((total, score)=> total + score) / jumsu.length);
				const person = document.createElement('article');
				ncstestmain.appendChild(person);
				person.setAttribute('class', 'person');
				person.innerHTML = `<h1 class="name">${value.name}</h1><img class="pictures" src="${value.imgUrl}" alt="${this.imgalt}">
        <ul class="jumsu">
          <li class="Language">📔국어<p class="langjumsu">${value.language} 점</p>
          </li>
          <li class="English">📘영어<p class="enjumsu">${value.english} 점</p>
          </li>
          <li class="Math">📐수학<p class="mathjumsu">${value.math} 점</p>
          </li>
          <li class="sum">✨합계
          <p>${total} 점</p>
          </li>
        <li class="avg">🌈평균
          <p>${avg} 점</p>
          </li>
        </ul>
        <section>

        </section>`;
			});
		}
		makeTotalJumsi(){

    }
	}
	const ncstestmain = document.querySelector('.ncstestmain');
  let personinformation = new MakeJumsu('person');
  personinformation.makePersonInformation()
};
