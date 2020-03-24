import md5 from 'md5';

const gravatar = ( email ) => {
  const base = 'https://gravatar.com/avatar/';
  const formatteEmail = (email).trim().toLowerCase(); // .trim() le quita los espacions y .toLowerCase() lo vuelce todo en minusculas
  const hash = md5(formatteEmail, { encoding: "binary" } );
  return `${base} ${hash}`
}