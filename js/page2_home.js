const dotlings = document.querySelectorAll('.dotling');
const violetOrbit = document.getElementById('violetOrbit');

dotlings.forEach(dot => {
  dot.addEventListener('click', () => {

    dotlings.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

 
    violetOrbit.style.animation = 'none';
    violetOrbit.offsetHeight;
    violetOrbit.style.animation = 'cosmicPop 0.5s ease';

  });
});