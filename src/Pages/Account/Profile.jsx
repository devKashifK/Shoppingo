


import "./slider.css";

// const DIRECTIOM_TYPE = {
//     next: "NEXT",
//     prev: "PREV" 
//   };
//   let nums = [1, 2, 3, 4, 5, 6, 7]

 function Profile () {
  // const width = createRef();

  //     const [state, setState] = useState ( {
  //       current: 2,
  //       needTransition: true,
  //       direction: ""
  //     })
    
  
  //   const handleSliderTranslateEnd = () => {
  //     console.log("handleSliderTranslateEnd");
  //     const { direction } = state;
  //     switch (direction) {
  //       case DIRECTIOM_TYPE.next:
  //         vaildNextSlider();
  //         break;
  //       case DIRECTIOM_TYPE.prev:
  //         vaildPrevSlider();
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  
  //   const vaildNextSlider = () => {
  //     const { current, } = state;
  //     let _current = current;
  //     // if (_current > nums.length - 3) {
  //     _current -= 1;
  //     const _num = [...nums, ...nums.slice(0, 1)].slice(-nums.length);
  //     setState({
  //       needTransition: false,
  //       current: _current,
  //       direction: ""
  //     });
  //     nums = _num
  //     // }
  //   };
  
  //   const vaildPrevSlider = () => {
  //     const { current } = state;
  //     let _current = current;
  //     // if (_current < 1) {
  //     _current += 1;
  //     const _num = [...nums.slice(-1), ...nums].slice(0, nums.length);
  //     setState({
  //       needTransition: false,
  //       current: _current,
  //       direction: ""
  //     });
  //     nums = _num
  //     // }
  //   };
  
  //   const handleNext = () => {
  //     const { current} = state;
  //     let _current = current + 1;
  //     if (_current > nums.length - 3) return;
  //     setState({
  //       needTransition: true,
  //       current: _current,
  //       direction: DIRECTIOM_TYPE.next
  //     });
     
  //   };
  
  //   const handlePrev = () => {
  //     const { current } = state;
  //     let _current = current - 1;
  //     if (_current < 0) return;
  //     setState({
  //       needTransition: true,
  //       current: _current,
  //       direction: DIRECTIOM_TYPE.prev
  //     });
  //   };
  
  //   const transLateVal = () => {
  //     return -(state.current * 33.333333);
  //   };
  
  //   const sliderStyle = () => {
  //     if (state.needTransition) {
  //       return {
  //         transform: `translateX(${transLateVal()}%)`,
  //         transition: "transform 0.3s ease-in-out"
  //       };
  //     }
  
  //     return {
  //       transform: `translateX(${transLateVal()}%)`
  //     };
  //   };
  
   
  //     return (
  //       <div className="sliderApp">
  //         <div className="sliderUl"
  //           style={sliderStyle()}
  //           onTransitionEnd={handleSliderTranslateEnd}
  //         >
  //           {nums.map((item, i) => (
  //             <li ref={width} className="sliderLi" key={i}>{item}</li>
  //           ))}
  //         </div>
  //         <div>
  //           <button onClick={handlePrev}>prev</button>
  //           <button onClick={handleNext}> next</button>
  //         </div>
  //       </div>
  //     );
    }
  
// class Profile extends PureComponent {
//     constructor(props) {
//       super(props);
//      .state = {
//         current: 2,
//         needTransition: true,
//         direction: ""
//       };
//     }
  
//     handleSliderTranslateEnd = () => {
//       console.log("handleSliderTranslateEnd");
//       const { direction } =.state;
//       switch (direction) {
//         case DIRECTIOM_TYPE.next:
//           this.vaildNextSlider();
//           break;
//         case DIRECTIOM_TYPE.prev:
//           this.vaildPrevSlider();
//           break;
//         default:
//           break;
//       }
//     };
  
//     vaildNextSlider = () => {
//       const { current, } = this.state;
//       let _current = current;
//       // if (_current > nums.length - 3) {
//       _current -= 1;
//       const _num = [...nums, ...nums.slice(0, 1)].slice(-nums.length);
//       this.setState({
//         needTransition: false,
//         current: _current,
        
//       });
//       nums = _num
//       // }
//     };
  
//     vaildPrevSlider = () => {
//       const { current } = this.state;
//       let _current = current;
//       // if (_current < 1) {
//       _current += 1;
//       const _num = [...nums.slice(-1), ...nums].slice(0, nums.length);
//       this.setState({
//         needTransition: false,
//         current: _current,
       
//       });
//       nums = _num
//       // }
//     };
  
//     handleNext = () => {
//       const { current} = this.state;
//       let _current = current + 1;
//       if (_current > nums.length - 3) return;
//       this.setState({
//         needTransition: true,
//         current: _current,
//         direction: DIRECTIOM_TYPE.next
//       });
//     };
  
//     handlePrev = () => {
//       const { current } = this.state;
//       let _current = current - 1;
//       if (_current < 0) return;
//       this.setState({
//         needTransition: true,
//         current: _current,
//         direction: DIRECTIOM_TYPE.prev
//       });
//     };
  
//     transLateVal = () => {
//       return -(this.state.current * 33.333333);
//     };
  
//     sliderStyle = () => {
//       if (this.state.needTransition) {
//         return {
//           transform: `translateX(${this.transLateVal()}%)`,
//           transition: "transform 0.3s ease-in-out"
//         };
//       }
  
//       return {
//         transform: `translateX(${this.transLateVal()}%)`
//       };
//     };
  
//     render() {
//       return (
//         <div className="sliderApp">
//           <div className="sliderUl"
//             style={this.sliderStyle()}
//             onTransitionEnd={this.handleSliderTranslateEnd}
//           >
//             {nums.map((item, i) => (
//               <li className="sliderLi" key={i}>{item}</li>
//             ))}
//           </div>
//           <div>
//             <button onClick={this.handlePrev}>prev</button>
//             <button onClick={this.handleNext}> next</button>
//           </div>
//         </div>
//       );
//     }
//   }

  export default Profile;