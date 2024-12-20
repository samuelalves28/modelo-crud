import React, { useEffect, useState, useCallback } from 'react';
import api from "../../connections/api";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuPackagePlus } from "react-icons/lu";
import { IoPencil, IoTrashOutline  } from "react-icons/io5";

const IndexView = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getProdutosApi = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.get('/api/adm/cad-produto/buscar', {});
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        } finally {
            setLoading(false);
        }
    });

    useEffect(() => {
        getProdutosApi();
    }, []);

    const HandlerNavigateDetalheProduto = (id) => {
        navigate(`c/${id}`);
    }

    const HandleDeleteProduct = async (id) => {
        setLoading(true);
        try {
          await api.delete(`/api/adm/cad-produto/${id}`);
          alert(`Produto deletado com sucesso`);
          await getProdutosApi();
        } catch (error) {
          console.error('Erro ao deletar o produto:', error);
        } finally {
          setLoading(false);
        }
      };
      
    return (<TableContainer component={Paper} style={{ marginTop: 20 }}>
        {loading
            ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
                    <CircularProgress />
                </div>
            )
            : (<Paper sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" style={{ gap: '8px', backgroundColor: 'black' }} onClick={() => HandlerNavigateDetalheProduto()}>
                        <LuPackagePlus /> Adicionar produto
                    </Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell style={{justifyContent: 'end', display:'flex'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>{row.preco}</TableCell>
                                <TableCell style={{justifyContent: 'end', display:'flex', fontSize: '10px'}}>
                                    <IconButton onClick={() => HandlerNavigateDetalheProduto(row.id)}>
                                        <IoPencil />
                                    </IconButton>
                                    <IconButton onClick={() => HandleDeleteProduct(row.id)}>
                                        <IoTrashOutline style={{color: 'red'}} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            )}
    </TableContainer>);
};

export default IndexView;
