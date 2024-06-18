'use script';

// 태그 초기화
let list = ``;
// 메뉴 리스트
const menuList = document.querySelector('#menuList');

// 데이터
const menuItems = [
  { name: '비빔밥', description: '밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리' },
  { name: '김치찌개', description: '김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리' },
  { name: '불고기', description: '양념한 고기를 구워서 먹는 한국 요리' },
  { name: '떡볶이', description: '떡과 어묵을 고추장 양념에 볶아 만든 한국의 간식' },
  { name: '잡채', description: '당면과 여러 채소, 고기를 볶아 만든 한국 요리' }
];

// 반복문
const menuElements = menuItems.map((data, idx) => {
  // 구조분해 할당을 통한 데이터 쪼개기
  const { name, description } =  data;

  // tag 넣기
  list += `
  <li>
    <h3>${data.name}</h3>
    <p>${data.description}</p>
  </li>`;
  
  console.log(idx, data);

});

// console.log(list);
// console.log(menuList);

menuList.innerHTML = list;