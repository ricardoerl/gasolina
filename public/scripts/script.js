var chart = new Highcharts.Chart({
  chart: {
    renderTo: 'chart',
    zoomType: 'x'
  },
  title: {
    text: 'Historial precios de referencia para combustibles'
  },
  yAxis: {
    title: {
      text: "Precio por galón"
    },
    labels: {
      format: "${value}"
    }
  },
  xAxis: {
    type: "datetime"
  },
  plotOptions: {
    line: {
      marker: {
        radius: 0
      },
      lineWidth: 1,
      states: {
        marker: {
          radius: 2
        },
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },
  tooltip: {
    shared: true,
    crosshairs: true,
    valuePrefix: '$',
    borderColor: '#000000'
  },
  data: {
    googleSpreadsheetKey: '1ML_FCUV-4Bun8twg0eagVlqkqIO4dcNuaAsuDezhiXo'
  },
  credits: {
    text: "highcharts.js",
    position: {
      align: 'center'
    }
  }
});

Highcharts.setOptions({
  lang: {
    loading: "Cargando...",
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun",  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    resetZoom: "Reestablecer zoom",
    resetZoomTitle: "Reestablecer zoom por defecto"
  }
});
