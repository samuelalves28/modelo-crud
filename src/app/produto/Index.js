import React, { useEffect, useState, useCallback } from 'react';
import api from "../../connections/api";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton } from '@mui/material';
import { GrEdit } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

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
        navigate(`${id}`);
    }

    return (<TableContainer component={Paper} style={{ marginTop: 20 }}>
        {loading
            ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
                    <CircularProgress />
                </div>
            )
            : (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>{row.preco}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => HandlerNavigateDetalheProduto(row.id)}>
                                        <GrEdit />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
    </TableContainer>);
};

export default IndexView;
