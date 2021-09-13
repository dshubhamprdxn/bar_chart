var countryName = 'india';
Highcharts.chart("container", {
  chart: {
    type: "bar",
		backgroundColor: '#103050',
  },
  styledMode: false,
  title: {
    text: "Stacked bar chart",
		style: { "color": "#fff" }
  },
  xAxis: {
    categories: ["", "", "", "", ""],
    lineColor: "#fff",
    lineWidth: 0,
    labels: {
      format: `
      <div style="display: flex">
        <div style="align-self: center;">
          <img src='./assets/${countryName}.png' />
        </div>
        <div style="display: flex;flex-direction: column">
          <div style="display: block;padding: 25% 0 0 25%;">
            <img src='./assets/Ecosystem-Icon.png' />
          </div>
          <div style="display: block;padding: 40% 0 0 25%;">
            <img src='./assets/Foundations-Icon.png' />
          </div>
        </div>
      </div>`,
      useHTML: true,
      style: { "color": "#fff" },
      align: 'center',
      allowOverlap: true,
    },
    // title: {
    //   text: '<img src="https://www.highcharts.com/samples/graphics/sun.png" />',
    //   // align: 'low',
    //   useHTML: true,
    // }
  },
  yAxis: {
    gridLineWidth: 0,
    gridLineColor: "#fff",
    min: 0,
    title: {
      text: "FE: Foundation for the Future<br>ED: Ecosystem for the Youth",
			style: { "color": "#fff" },
    },

    labels: {
      enabled: false,
    },
  },
  legend: {
    enabled: false,
		style: { "color": "#fff" },
  },
  plotOptions: {
    series: {
      stacking: "normal",
      cursor: "pointer",
			borderWidth: 0,
      
      // enableMouseTracking: false,
      states: {
        hover: {
          enabled: false,
        },
        inactive: {
          opacity: 1,
        },
      },
    },
  },
  series: [
    {
      name: "HEALTH & WELLBEING",
      data: [
        { y: 3, color: "#7E5515" },
        { y: 12, color: "#471845" },
        { y: 4, color: "#104A20" },
        { y: 4, color: "#80252A" },
      ],
      stack: "FOUNDATIONS FOR THE FUTURE",
      drilldown: "HEALTH & WELLBEING",
    },
    {
      name: "GLOBAL CITIZENSHIP & LEADERSHIP",
      data: [
        { y: 2, color: "#97651A" },
        { y: 5, color: "#551D52" },
        { y: 6, color: "#145927" },
        { y: 2, color: "#992D33" },
      ],
      stack: "FOUNDATIONS FOR THE FUTURE",
    },
    {
      name: "ENTREPRENEURSHIP & EMPLOYABILITY",
      data: [
        { y: 3, color: "#B0761E" },
        { y: 4, color: "#632260" },
        { y: 4, color: "#17682D" },
        { y: 2, color: "#B3343C" },
      ],
      stack: "FOUNDATIONS FOR THE FUTURE",
    },
    {
      name: "EDUCATION & SKILLS",
      data: [
        { y: 3, color: "#C98722" },
        { y: 3, color: "#72276E" },
        { y: 4, color: "#1A7634" },
        { y: 7, color: "#CC3C44" },
      ],
      stack: "FOUNDATIONS FOR THE FUTURE",
    },
    {
      name: "Innovation capacity",
      data: [
        { y: 3, color: "#FFF6EA" },
        { y: 12, color: "#C798C4" },
        { y: 4, color: "#90CAA0" },
        { y: 4, color: "#FFA5AA" },
      ],
      stack: "ECOSYSTEM FOR YOUTH DEVELOPMENT",
    },
    {
      name: "Economic dynamism",
      data: [
        { y: 3, color: "#FEE5BF" },
        { y: 12, color: "#BB83B8" },
        { y: 4, color: "#7ABF8D" },
        { y: 4, color: "#FF9399" },
      ],
      stack: "ECOSYSTEM FOR YOUTH DEVELOPMENT",
    },
    {
      name: "Infrastructure & connectivity",
      data: [
        { y: 3, color: "#FDD597" },
        { y: 12, color: "#B06FAC" },
        { y: 4, color: "#64B47A" },
        { y: 4, color: "#FF8188" },
      ],
      stack: "ECOSYSTEM FOR YOUTH DEVELOPMENT",
    },
    {
      name: "Security & governance",
      data: [
        { y: 3, color: "#FCBA55" },
        { y: 12, color: "#A55AA1" },
        { y: 4, color: "#4DA967" },
        { y: 4, color: "#FF6F77" },
      ],
      stack: "ECOSYSTEM FOR YOUTH DEVELOPMENT",
    },
  ],
});
