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

const modalSuccess = async (title: string) => {
  await Swal.fire({
    icon: 'success',
    title
  });
};

export { modalError, modalWarning, modalSuccess };
