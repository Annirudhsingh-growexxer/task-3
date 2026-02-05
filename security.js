function santizeInput(input) {
    
    return input.replace(/<|>|&|"/g, '');
}
module.exports = {santizeInput};