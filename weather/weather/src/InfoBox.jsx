import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'; 

export default function InfoBox({ info }) {
  return (
    <div className="info-box-container">
      <h1 className="info-title">Weather in {info.weather}</h1>
      <Card className="info-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="weather"
          height="160"
          image="https://images.unsplash.com/photo-1746717410283-f4017128c38f?q=80&w=687&auto=format&fit=crop"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.weather}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>🌡️ Feels Like: {info.feels_like}°C</p>
            <p>🔺 Max Temp: {info.tempMax}°C</p>
            <p>🔻 Min Temp: {info.tempMin}°C</p>
            <p>💧 Humidity: {info.humid}%</p>
          </Typography>
        </CardContent>
        </Card>
    </div>
  );
}
