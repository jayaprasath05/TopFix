function openDirections(latlng) {
      // Opens Google Maps directions from user's location to the service center
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${latlng}`, '_blank');
    }

