import axios from 'axios';

export default axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM3NzdjYWExOGRjMThlNTU3YjllNDJkYmM0NmQ2MiIsInN1YiI6IjYyYTYyMGFjODUwMDVkNGMwOTdmM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPHq9tou-9b7ThrPMfOHfNGh3vEk3XY64xSewA1-GQk'
    }
});