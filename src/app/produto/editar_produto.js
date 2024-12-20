import React, { useEffect, useState, useCallback } from 'react';
import { TextField, Button, Paper, Typography, CircularProgress } from '@mui/material';
import api from "../../connections/api";
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

const EditarProdutoView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = React.useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
  });
  const navigate = useNavigate();

  const getProdutosApi = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/api/adm/cad-produto/${id}`, {});
      setFormValues(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    getProdutosApi();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true);

    try {
      await api.put(`/api/adm/cad-produto`, {
        id,
        ...formValues,
      });
      alert('Produto atualizado com sucesso');
      navigate(-1)
    } catch (error) {
      alert('Erro ao atualizar o produto. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (<Paper sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
    {loading
      ? (<div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
        <CircularProgress />
      </div>)
      : (
        <>
          <Typography variant="h6" style={{ padding: '15px' }}>
            Editar Produto
          </Typography>
          <form onSubmit={handleSubmit} style={{ padding: '15px' }}>
            <Grid container spacing={2} flexDirection='column'>
              <Grid item xs={12}>
                <TextField fullWidth label="Nome do Produto" name="nome" value={formValues.nome} onChange={handleInputChange} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Descrição" name="descricao" value={formValues.descricao} onChange={handleInputChange} variant="outlined" multiline rows={4} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Preço" name="preco" type="number" value={formValues.preco} onChange={handleInputChange} variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Quantidade" name="quantidade" type="number" value={formValues.quantidade} onChange={handleInputChange} variant="outlined" />
              </Grid>
              <Grid item xs={12} style={{ justifyContent: 'flex-end', display: 'flex' }}>
                <Button type="submit" variant="contained" color="primary" >
                  Salvar Produto
                </Button>
              </Grid>
            </Grid>
          </form>
        </>)}
  </Paper>);
};

export default EditarProdutoView;
