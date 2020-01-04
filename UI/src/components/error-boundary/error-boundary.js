import React, { Component } from "react";
import { ErrorWrapper, ErrorImage } from "./error-boundary.style";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      throwedError: false
    };
  }

  static getDerivedStateFromError(err) {
    return { throwedError: true };
  }

  componentDidCatch(error, details) {
    console.log(error);
  }

  render() {
    const { throwedError } = this.state;
    const errorPlaceHolder = (
      <ErrorWrapper>
        <ErrorImage imageUrl="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Animals-PNG/Monkey_PNG_Image.png?m=1507172115" />
        <div className="display-4">Sorry, something went wrong...</div>
      </ErrorWrapper>
    );

    return throwedError ? errorPlaceHolder : this.props.children;
  }
}

export default ErrorBoundary;
