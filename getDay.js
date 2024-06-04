function getDay (dateString) {
    const date = new Date(dateString);
    var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return weekDays[dayIndex];
  }