function Component6() {
    return (
      <Frame
        name="Component6"
        overflow="visible"
        width={171.109}
        height={82}
        {...props}
      >
        <Rectangle
          name="Rectangle 11"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0.049,
            rightOffsetPercent: 0.015,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          fill="#FFB257"
          cornerRadius={10}
          width={171}
          height={82}
        />
        <SVG
          name="Vector 1"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 68.088,
            bottomOffsetPercent: 0,
          }}
          height={26}
          width={171}
          src="<svg width='173' height='27' viewBox='0 0 173 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M0.999986 15.5V7.50002C14 14 45.6802 17.8245 79 7.50002C114.5 -3.5 154 1.00002 172 7.50002V15C172.5 25 165.5 27 162 27H12C2 27 0.499971 19.5 0.999986 15.5Z' fill='#FAD386'/>
  </svg>
  "
        />
      </Frame>
    );
}