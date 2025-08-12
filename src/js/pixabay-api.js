import axios from 'axios';

export function getImagesByQuery(query, page) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51711759-c98880f89c2a2cc3e02319f38',
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15, // кількість карток за запит
        page: page,   // номер сторінки
      },
    })
    .then(response => {
      return response.data; // повертаємо весь об'єкт, щоб отримати totalHits
    });
}
