import { render } from 'mjml-react';

export const renderToHTML = (ctx, View) => {
  const { html, errors } = render(View);

  if (errors && errors.length > 0) {
    ctx.status = 400;
    ctx.body = errors;
  } else {
    ctx.body = html;
  }
  ctx.type = 'text/html';
};
