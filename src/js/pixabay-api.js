import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '51711759-c98880f89c2a2cc3e02319f38',
      q: query.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return response.data; // повертаємо весь об'єкт data, щоб мати totalHits
}
