const center = {
    lat: -15.7975,
    lng: -47.8919,
  };
  
  for (let i = 0; i < 300; i++) {
    // Gerar coordenadas aleatórias próximas ao centro
    const randomLatitude = center.lat + (Math.random() - 0.5) * 0.01;
    const randomLongitude = center.lng + (Math.random() - 0.5) * 0.01;
  
    // Fazer a solicitação POST para enviar as coordenadas ao banco de dados
    fetch("http://localhost:3000/cord/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: randomLatitude,
        lng: randomLongitude,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send coordinates");
        }
        console.log(
          `Coordinates sent successfully: Lat: ${randomLatitude}, Lng: ${randomLongitude}`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }