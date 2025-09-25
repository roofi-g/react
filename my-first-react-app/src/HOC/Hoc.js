import React from "react";

function Content() {
  return <div>Content</div>
}
function Data() {
  return <div>Data</div>
}

//  HOC (higher order components)
function withLoadingIndicator(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>

    return <Component {...props}/>
  }
}

const HOC = withLoadingIndicator(Content);
const HOC2 = withLoadingIndicator(Data);

export default function AppHoc() {
  return (
    <>
      <HOC isLoading={true} />
      <HOC isLoading={false} />
    </>
  )
}
