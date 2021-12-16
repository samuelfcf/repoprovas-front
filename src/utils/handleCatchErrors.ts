import Swal from 'sweetalert2';

const modalError = async (title: string) => {
  await Swal.fire({
    icon: 'error',
    title
  });
};

const modalWarning = async (title: string) => {
  await Swal.fire({
    icon: 'warning',
    title
  });
};

export { modalError, modalWarning };
