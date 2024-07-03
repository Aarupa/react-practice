
import React from 'react';
const WithLoding = (WrappedComponent) =>{

    return class WithLoding extends React.Component{
        render(){
            const{isLoding, ...otherProps} = this.props;
            if(isLoding){
                return <div>Loding...</div>
            }

            return <WrappedComponent {...otherProps}/>
        }
    };

};

export default WithLoding;

// import React from 'react';

// const withLoading = (WrappedComponent) => {
//   return function WithLoading({ isLoading, ...otherProps }) {
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }

//     return <WrappedComponent {...otherProps} />;
//   };
// };

// export default withLoading;
