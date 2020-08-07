export default {
  name: 'chemml.chem',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'atom_features',
      docstring:
        'This function encodes the RDKit atom to a binary vector.\n\n    Parameters\n    ----------\n    bond : rdkit.Chem.rdchem.Bond\n        The bond must be an RDKit Bond object.\n\n    Returns\n    -------\n    features : array\n        A binary array with length 6 that specifies the type of bond, if it is\n        a single/double/triple/aromatic bond, a conjugated bond or belongs to a molecular ring.\n\n    ',
      inputs: [
        {
          name: 'bond',
          docstring: 'The bond must be an RDKit Bond object.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        }
      ],
      outputs: [
        {
          name: 'features',
          docstring:
            'A binary array with length 6 that specifies the type of bond, if it is a single/double/triple/aromatic bond, a conjugated bond or belongs to a molecular ring.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'bond_features',
      docstring:
        'This function encodes the RDKit bond to a binary vector.\n\n    Parameters\n    ----------\n    bond : rdkit.Chem.rdchem.Bond\n        The bond must be an RDKit Bond object.\n\n    Returns\n    -------\n    features : array\n        A binary array with length 6 that specifies the type of bond, if it is\n        a single/double/triple/aromatic bond, a conjugated bond or belongs to a molecular ring.\n\n    ',
      inputs: [
        {
          name: 'bond',
          docstring: 'The bond must be an RDKit Bond object.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        }
      ],
      outputs: [
        {
          name: 'features',
          docstring:
            'A binary array with length 6 that specifies the type of bond, if it is a single/double/triple/aromatic bond, a conjugated bond or belongs to a molecular ring.',
          param_type: ['array'],
          returned: true
        }
      ]
    },
    {
      name: 'num_atom_features',
      docstring:
        'This function returns the number of atomic features that are available by this module.\n\n    Returns\n    -------\n    n_features : int\n        length of atomic feature vector.\n    ',
      inputs: [],
      outputs: [
        {
          name: 'n_features',
          docstring: 'length of atomic feature vector.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'num_bond_features',
      docstring:
        'This function returns the number of bond features that are available by this module.\n\n    Returns\n    -------\n    n_features : int\n        length of bond feature vector.\n    ',
      inputs: [],
      outputs: [
        {
          name: 'n_features',
          docstring: 'length of bond feature vector.',
          param_type: ['int'],
          returned: true
        }
      ]
    },
    {
      name: 'tensorise_molecules',
      docstring:
        "Takes a list of molecules and provides tensor representation of atom and bond features.\n    This representation is based on the \"convolutional networks on graphs for learning molecular fingerprints\" by\n    David Duvenaud et al., NIPS 2015.\n\n    Parameters\n    ----------\n    molecules : chemml.chem.Molecule object or array\n        If list, it must be a list of chemml.chem.Molecule objects, otherwise we raise a ValueError.\n        In addition, all the molecule objects must provide the SMILES representation.\n        We try to create the SMILES representation if it's not available.\n\n    max_degree : int, optional (default=5)\n        The maximum number of neighbour per atom that each molecule can have\n        (to which all molecules will be padded), use 'None' for auto\n\n    max_atoms : int, optional (default=None)\n        The maximum number of atoms per molecule (to which all\n        molecules will be padded), use 'None' for auto\n\n    n_jobs : int, optional(default=-1)\n        The number of parallel processes. If -1, uses all the available processes.\n\n    batch_size : int, optional(default=3000)\n        The number of molecules per process, bigger chunksize is preffered as each process will preallocate np.arrays\n\n    verbose : bool, optional(default=True)\n        The verbosity of messages.\n\n    Notes\n    -----\n        It is not recommended to set max_degree to `None`/auto when\n        using `NeuralGraph` layers. Max_degree determines the number of\n        trainable parameters and is essentially a hyperparameter.\n        While models can be rebuilt using different `max_atoms`, they cannot\n        be rebuild for different values of `max_degree`, as the architecture\n        will be different.\n\n        For organic molecules `max_degree=5` is a good value (Duvenaud et. al, 2015)\n\n\n    Returns\n    -------\n        atoms : array\n            An atom feature array of shape (molecules, max_atoms, atom_features)\n        bonds : array\n            A bonds array of shape (molecules, max_atoms, max_degree)\n        edges : array\n        A connectivity array of shape (molecules, max_atoms, max_degree, bond_features)\n    ",
      inputs: [
        {
          name: 'molecules',
          docstring:
            "If list, it must be a list of chemml.chem.Molecule objects, otherwise we raise a ValueError. In addition, all the molecule objects must provide the SMILES representation. We try to create the SMILES representation if it's not available.",
          param_type: ['array', 'object'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'max_degree',
          docstring:
            "The maximum number of neighbour per atom that each molecule can have (to which all molecules will be padded), use 'None' for auto",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '5',
          options: null
        },
        {
          name: 'max_atoms',
          docstring:
            "The maximum number of atoms per molecule (to which all molecules will be padded), use 'None' for auto",
          param_type: ['int', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'None',
          options: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of parallel processes. If -1, uses all the available processes.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '-1',
          options: null
        },
        {
          name: 'batch_size',
          docstring:
            'The number of molecules per process, bigger chunksize is preffered as each process will preallocate np.arrays',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '3000',
          options: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity of messages.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'atoms',
          docstring:
            'An atom feature array of shape (molecules, max_atoms, atom_features)',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'bonds',
          docstring:
            'A bonds array of shape (molecules, max_atoms, max_degree)',
          param_type: ['array'],
          returned: true
        },
        {
          name: 'edges',
          docstring:
            'edges : array A connectivity array of shape (molecules, max_atoms, max_degree, bond_features)',
          param_type: ['array'],
          returned: true
        }
      ]
    }
  ],
  nodes: [
    {
      name: 'BagofBonds',
      docstring:
        '\n    The implementation of bag of bonds version of coulomb matrix by katja Hansen et. al. 2015, JPCL.',
      inputs: [
        {
          name: 'const',
          docstring:
            'The constant value for coordinates unit conversion to atomic unit if const=1.0, returns atomic unit if const=0.529, returns Angstrom  const/|Ri-Rj|, which denominator is the euclidean distance between two atoms',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '1.0',
          options: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of parallel processes. If -1, uses all the available processes.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '-1',
          options: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity of messages.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'header_',
          docstring:
            'contains one nuclear charge (represents single atom) or a tuple of two nuclear charges (represents a bond)',
          param_type: ['list'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: 'represent',
          docstring:
            '\n        provides bag of bonds representation for input molecules.',
          inputs: [
            {
              name: 'molecules',
              docstring:
                'If list, it must be a list of chemml.chem.Molecule objects, otherwise we raise a ValueError. In addition, all the molecule objects must provide the XYZ information. Please make sure the XYZ geometry has been stored or optimized in advance.',
              param_type: ['array', 'object'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'features',
              docstring: 'The bag of bond features.',
              param_type: [null],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'CoulombMatrix',
      docstring:
        '\n    The implementation of coulomb matrix descriptors by Matthias Rupp et. al. 2012, PRL (All 3 different variations).',
      inputs: [
        {
          name: 'cm_type',
          docstring:
            "The coulomb matrix type, one of the following types:     * 'Unsorted_Matrix' or 'UM'     * 'Unsorted_Triangular' or 'UT'     * 'Eigenspectrum' or 'E'      * 'Sorted_Coulomb' or 'SC'     * 'Random_Coulomb' or 'RC'",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'SC',
          options: ['UM', 'UT', 'E', 'SC', 'RC']
        },
        {
          name: 'max_n_atoms',
          docstring:
            "Set the maximum number of atoms per molecule (to which all representations will be padded). If 'auto', we find it based on all input molecules.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: 'auto',
          options: null
        },
        {
          name: 'nPerm',
          docstring:
            'Number of permutation of coulomb matrix per molecule for Random_Coulomb (RC)  type of representation.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '3',
          options: null
        },
        {
          name: 'const',
          docstring:
            'The constant value for coordinates unit conversion to atomic unit example: atomic unit -> const=1, Angstrom -> const=0.529 const/|Ri-Rj|, which denominator is the euclidean distance between atoms i and j',
          param_type: ['float'],
          expected_shape: null,
          is_optional: true,
          default_value: '1',
          options: null
        },
        {
          name: 'n_jobs',
          docstring:
            'The number of parallel processes. If -1, uses all the available processes.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '-1',
          options: null
        },
        {
          name: 'verbose',
          docstring: 'The verbosity of messages.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        }
      ],
      outputs: [
        {
          name: 'n_molecules_',
          docstring: 'Total number of molecules.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'max_n_atoms_',
          docstring: 'Maximum number of atoms in all molecules.',
          param_type: ['int'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: 'represent',
          docstring:
            '\n        provides coulomb matrix representation for input molecules.',
          inputs: [
            {
              name: 'molecules',
              docstring:
                'If list, it must be a list of chemml.chem.Molecule objects, otherwise we raise a ValueError. In addition, all the molecule objects must provide the XYZ information. Please make sure the XYZ geometry has been stored or optimized in advance.',
              param_type: ['array', 'object'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'features',
              docstring:
                'A data frame with same number of rows as number of molecules will be returned. The exact shape of the dataframe depends on the type of CM as follows:     - shape of Unsorted_Matrix (UM): (n_molecules, max_n_atoms**2)     - shape of Unsorted_Triangular (UT): (n_molecules, max_n_atoms*(max_n_atoms+1)/2)     - shape of eigenspectrums (E): (n_molecules, max_n_atoms)     - shape of Sorted_Coulomb (SC): (n_molecules, max_n_atoms*(max_n_atoms+1)/2)     - shape of Random_Coulomb (RC): (n_molecules, nPerm * max_n_atoms * (max_n_atoms+1)/2)',
              param_type: ['dataframe'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'Dragon',
      docstring:
        '\n    An interface to Dragon 6 and 7 chemoinformatics software. Dragon is a commercial software and\n    you should provide API Key',
      inputs: [
        {
          name: 'version',
          docstring:
            "The version of available Dragon on the user's system. (available versions: 6 or 7)",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '7',
          options: null
        },
        {
          name: 'Weights',
          docstring: 'A list of weights to be used',
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'blocks',
          docstring:
            "A list of integers as descriptor blocks' id. There are totally 29 and 30 blocks available in version 6 and 7, respectively. This module is not atimed to cherry pick descriptors in each block. For doing so, please use Script Wizard in Drgon GUI.",
          param_type: ['list'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'external',
          docstring:
            'If True, include external variables at the end of each saved file.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'False',
          options: null
        }
      ],
      outputs: [],
      node_functions: [
        {
          name: '__init__',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: '_save_script',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'convert_to_csv',
          docstring:
            '\n        This function converts the tab-delimited txt file from Dragon to pandas dataframe.\n        Note that this process might require large memory based on the number of data points and features.',
          inputs: [
            {
              name: 'remove',
              docstring:
                'if True, the original descriptors file (Dragon_descriptors.txt) will be removed.',
              param_type: ['bool'],
              expected_shape: null,
              is_optional: true,
              default_value: 'True',
              options: null
            }
          ],
          outputs: [
            {
              name: 'features',
              docstring:
                "The 2D dataframe of the descriptors. Note that the first two columns are 'No.' and 'NAME'.",
              param_type: ['dataframe'],
              returned: true
            }
          ]
        },
        {
          name: 'printout',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'run',
          docstring: 'None',
          inputs: [],
          outputs: []
        },
        {
          name: 'script_wizard',
          docstring:
            "\n        The script_wizard is designed to build a Dragon script file. The name and\n        the functionality of this function is the same as available Script wizard\n        in the Dragon Graphic User Interface.\n        Note: All reported nodes are mandatory, except the <EXTERNAL> tag\n        Note: Script for version 7 doesn't support fingerprints block",
          inputs: [
            {
              name: 'script',
              docstring:
                'If "new" start creating a new script from scratch. If you want to load an existing script, pass the filename with drs format.',
              param_type: ['str'],
              expected_shape: null,
              is_optional: true,
              default_value: '"new"',
              options: null
            },
            {
              name: 'output_directory',
              docstring:
                'the path to the working directory to store output files.',
              param_type: ['str'],
              expected_shape: null,
              is_optional: true,
              default_value: './',
              options: null
            },
            {
              name: 'dragon',
              docstring: 'Dragon script in  xml format.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'drs',
              docstring: 'Dragon script file name',
              param_type: ['str'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'data_path',
              docstring:
                "The path+name of saved data file in any format. If saveType is 'block' or 'subblock' data_path is just the path to the directory that all data files have been saved.",
              param_type: ['str'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'Molecule',
      docstring:
        'The central class to construct a molecule from different chemical input formats.\n    This module is built on top of RDKit and OpenBabel python API.\n    We join the forces and strength of these two cheminformatic libraris for a consistent user experience.\n\n    Almost all the molecular descriptors and molecule-based ML models require the chemical informatin as a Molecule object.\n    Several methods are available in this module to facilitate the manipulation of chemical data.',
      inputs: [
        {
          name: 'input',
          docstring: 'The representation string or path to a file.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'input_type',
          docstring:
            'The input type. The available types are enlisted here:     - smiles: The input must be SMILES representation of a molecule.     - smarts: The input must be SMARTS representation of a molecule.     - inchi: The input must be InChi representation of a molecule.     - xyz:  The input must be the path to an xyz file.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: ['smiles', 'smarts', 'inchi', 'xyz']
        },
        {
          name: 'kwargs',
          docstring:
            'The corresponding RDKit arguments for each of the input types:     - smiles: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolFromSmiles     - smarts: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolFromSmarts     - inchi: http://rdkit.org/docs/source/rdkit.Chem.inchi.html?highlight=inchi#rdkit.Chem.inchi.MolFromInchi',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        }
      ],
      outputs: [
        {
          name: 'rdkit_molecule',
          docstring: 'The `rdkit.Chem.rdchem.Mol` object',
          param_type: ['object'],
          returned: false
        },
        {
          name: 'smiles',
          docstring:
            'The SMILES string that you get by running the `to_smiles` method.',
          param_type: ['str'],
          returned: false
        },
        {
          name: 'smarts',
          docstring:
            'The SMARTS string that you get by running the `to_smarts` method.',
          param_type: ['str'],
          returned: false
        },
        {
          name: 'inchi',
          docstring:
            'The InChi string that you get by running the `to_inchi` method.',
          param_type: ['str'],
          returned: false
        },
        {
          name: 'xyz',
          docstring:
            "The class object that stores the 3D info. The available attributes in the class are 'geometry', 'atomic_numbers', and 'atomic_symbols'.",
          param_type: [null],
          returned: false
        }
      ],
      node_functions: [
        {
          name: 'hydrogens',
          docstring:
            "\n        This function adds/removes hydrogens to/from a prebuilt molecule object.\n\n        Parameters\n        ----------\n        action : str\n            Either 'add' or 'remove', to add hydrogns or remove them from the rdkit molecule.\n\n        kwargs :\n            The arguments that can be passed to the rdkit functions:\n            - `Chem.AddHs`: documentation at http://rdkit.org/docs/source/rdkit.Chem.rdmolops.html?highlight=addhs#rdkit.Chem.rdmolops.AddHs\n            - `Chem.RemoveHs`: documentation at http://rdkit.org/docs/source/rdkit.Chem.rdmolops.html?highlight=addhs#rdkit.Chem.rdmolops.RemoveHs\n\n        Notes\n        -----\n            - The rdkit or pybel molecule object must be created in advance.\n            - Only rdkit or pybel molecule object will be modified in place.\n            - If you remove hydrogens from molecules, the atomic 3D coordinates might not be accurate for the conversion to xyz representation.\n\n        ",
          inputs: [
            {
              name: 'action',
              docstring:
                "Either 'add' or 'remove', to add hydrogns or remove them from the rdkit molecule.",
              param_type: ['str'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'kwargs :',
              docstring:
                'The arguments that can be passed to the rdkit functions: - `Chem.AddHs`: documentation at http://rdkit.org/docs/source/rdkit.Chem.rdmolops.html?highlight=addhs#rdkit.Chem.rdmolops.AddHs - `Chem.RemoveHs`: documentation at http://rdkit.org/docs/source/rdkit.Chem.rdmolops.html?highlight=addhs#rdkit.Chem.rdmolops.RemoveHs',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'to_inchi',
          docstring:
            '\n        This function creates and stores the InChi string for a pre-built molecule.\n\n        Parameters\n        ----------\n        kwargs :\n            The arguments that can be passed to the rdkit.Chem.MolToInchi function (will be used only if rdkit molecule is available).\n            The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.inchi.html?highlight=inchi#rdkit.Chem.inchi.MolToInchi\n\n        Notes\n        -----\n            - The rdkit or pybel molecule object must be created in advance.\n            - The molecule will be modified in place.\n\n        ',
          inputs: [
            {
              name: 'kwargs :',
              docstring:
                'The arguments that can be passed to the rdkit.Chem.MolToInchi function (will be used only if rdkit molecule is available). The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.inchi.html?highlight=inchi#rdkit.Chem.inchi.MolToInchi',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'to_smarts',
          docstring:
            '\n        This function creates and stores the SMARTS string for a pre-built molecule.\n\n        Parameters\n        ----------\n        kwargs :\n            All the arguments that can be passed to the rdkit.Chem.MolToSmarts function.\n            The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolToSmarts\n\n        Notes\n        -----\n            - The rdkit or pybel molecule object must be created in advance.\n            - If only pybel molecule is available, we create an rdkit molecule using its SMILES representation, and then create the SMARTS string using rdkit arguments.\n            - The molecule will be modified in place.\n\n        ',
          inputs: [
            {
              name: 'kwargs :',
              docstring:
                'All the arguments that can be passed to the rdkit.Chem.MolToSmarts function. The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolToSmarts',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'to_smiles',
          docstring:
            '\n        This function creates and stores the SMILES string for a pre-built molecule.\n\n        Parameters\n        ----------\n        kwargs :\n            The arguments for the rdkit.Chem.MolToSmiles function.\n            The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolToSmiles\n\n        Notes\n        -----\n            - The rdkit or pybel molecule object must be created in advance.\n            - If only pybel molecule is available, we create an rdkit molecule using its SMILES representation, and then recreate the SMILES string using rdkit arguments.\n            - The molecule will be modified in place.\n            - For rdkit molecule the SMILES string is canocical by default, unless when one requests kekuleSmiles.\n\n        ',
          inputs: [
            {
              name: 'kwargs :',
              docstring:
                'The arguments for the rdkit.Chem.MolToSmiles function. The documentation is available at: http://rdkit.org/docs/source/rdkit.Chem.rdmolfiles.html#rdkit.Chem.rdmolfiles.MolToSmiles',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'to_xyz',
          docstring:
            "\n        This function creates and stores the xyz coordinates for a pre-built molecule object.\n\n        Parameters\n        ----------\n        optimizer : None or str, optional (default: None)\n            If None, the geometries will be extracted from the available source of 3D structure (if any).\n            Otherwise, any of the 'UFF' or 'MMFF' force fileds should be passed to embed and optimize geometries using 'rdkit.Chem.AllChem.UFFOptimizeMolecule' or\n            'rdkit.Chem.AllChem.MMFFOptimizeMolecule' methods, respectively.\n\n        kwargs :\n            The arguments that can be passed to the corresponding forcefileds.\n            The documentation is available at:\n                - UFFOptimizeMolecule: http://rdkit.org/docs/source/rdkit.Chem.rdForceFieldHelpers.html?highlight=mmff#rdkit.Chem.rdForceFieldHelpers.UFFOptimizeMolecule\n                - MMFFOptimizeMolecule: http://rdkit.org/docs/source/rdkit.Chem.rdForceFieldHelpers.html?highlight=mmff#rdkit.Chem.rdForceFieldHelpers.MMFFOptimizeMolecule\n\n        Notes\n        -----\n            - The geometry will be stored in the `xyz` attribute.\n            - The molecule object must be created in advance.\n            - The hydrogens won't be added to the molecule automatically. You should add it manually using `hydrogens` method.\n            - If the molecule object has been built using 2D representations (e.g., SMILES or InChi), the conformer\n            doesn't exist and you nedd to set the optimizer parameter to any of the force fields.\n            - If the 3D info exist but you still need to run optimization, the 3D structure will be embedded from scratch (i.e., the current atom coordinates will be removed.)\n\n\n        ",
          inputs: [
            {
              name: 'optimizer',
              docstring:
                "If None, the geometries will be extracted from the available source of 3D structure (if any). Otherwise, any of the 'UFF' or 'MMFF' force fileds should be passed to embed and optimize geometries using 'rdkit.Chem.AllChem.UFFOptimizeMolecule' or 'rdkit.Chem.AllChem.MMFFOptimizeMolecule' methods, respectively.",
              param_type: ['str', null],
              expected_shape: null,
              is_optional: true,
              default_value: 'None',
              options: null
            },
            {
              name: 'kwargs :',
              docstring:
                'The arguments that can be passed to the corresponding forcefileds. The documentation is available at:     - UFFOptimizeMolecule: http://rdkit.org/docs/source/rdkit.Chem.rdForceFieldHelpers.html?highlight=mmff#rdkit.Chem.rdForceFieldHelpers.UFFOptimizeMolecule     - MMFFOptimizeMolecule: http://rdkit.org/docs/source/rdkit.Chem.rdForceFieldHelpers.html?highlight=mmff#rdkit.Chem.rdForceFieldHelpers.MMFFOptimizeMolecule',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        },
        {
          name: 'visualize',
          docstring:
            '\n        This function visualizes the molecule. If both rdkit and pybel objects are avaialble, the rdkit object\n        will be used for visualization.\n\n        Parameters\n        ----------\n        filename: str, optional (default = None)\n            This is the path to the file that you want write the image in it.\n            Tkinter and Python Imaging Library are required for writing the image.\n\n        kwargs:\n            any extra parameter that you want to pass to the rdkit or pybel draw tool.\n            Additional information at:\n                - https://www.rdkit.org/docs/source/rdkit.Chem.Draw.html\n                - http://openbabel.org/docs/dev/UseTheLibrary/Python_PybelAPI.html#pybel.Molecule.draw\n\n        Returns\n        -------\n        fig : object\n            You will be able to display this object, e.g., inside the Jupyter Notebook.\n\n        ',
          inputs: [
            {
              name: 'filename: str, optional (default = None)',
              docstring:
                'This is the path to the file that you want write the image in it. Tkinter and Python Imaging Library are required for writing the image.',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'kwargs:',
              docstring:
                'any extra parameter that you want to pass to the rdkit or pybel draw tool. Additional information at:     - https://www.rdkit.org/docs/source/rdkit.Chem.Draw.html     - http://openbabel.org/docs/dev/UseTheLibrary/Python_PybelAPI.html#pybel.Molecule.draw',
              param_type: [null],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'fig',
              docstring:
                'You will be able to display this object, e.g., inside the Jupyter Notebook.',
              param_type: ['object'],
              returned: true
            }
          ]
        }
      ],
      nodes: []
    },
    {
      name: 'RDKitFingerprint',
      docstring:
        '\n    This is an interface to the available molecular fingerprints in the RDKit package.',
      inputs: [
        {
          name: 'fingerprint_type',
          docstring:
            "The type of fingerprint. Available fingerprint types:     - 'hashed_atom_pair' or 'hap'     - 'MACCS' or 'maccs'     - 'morgan'     - 'hashed_topological_torsion' or 'htt'     - 'topological_torsion' or 'tt'",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'Morgan',
          options: [
            'hashed_atom_pair',
            'MACCS',
            'morgan',
            'hashed_topological_torsion',
            'topological_torsion'
          ]
        },
        {
          name: 'vector',
          docstring:
            "Available options for vector:     - 'int' : represent counts for each fragment instead of bits             It is not available for 'MACCS'.     - 'bit' : only zeros and ones             It is not available for 'Topological_torsion'.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: 'bit',
          options: ['int', 'bit']
        },
        {
          name: 'n_bits',
          docstring:
            "It sets number of elements/bits in the 'bit' type of fingerprint vectors. Not available for:     - 'MACCS' - (MACCS keys have a fixed length of 167 bits)     - 'Topological_torsion' - doesn't return a bit vector at all.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '1024',
          options: null
        },
        {
          name: 'radius',
          docstring: "only applicable if calculating 'Morgan' fingerprint.",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '2',
          options: null
        },
        {
          name: 'kwargs :',
          docstring:
            'Any additional argument that should be passed to the rdkit fingerprint function.',
          param_type: [null],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        }
      ],
      outputs: [
        {
          name: 'n_molecules_',
          docstring: 'The number of molecules that are received.',
          param_type: ['int'],
          returned: false
        },
        {
          name: 'fps_',
          docstring: 'The list of rdkit fingerprint objects.',
          param_type: ['list'],
          returned: false
        }
      ],
      node_functions: [
        {
          name: 'represent',
          docstring:
            '\n        The main function to provide fingerprint representation of input molecule(s).',
          inputs: [
            {
              name: 'molecules',
              docstring:
                'It must be an instance of chemml.chem.Molecule object or a list of those objects, otherwise a ValueError will be raised. If smiles representation of the molecule (or rdkit molecule object) is not available, we convert the molecule to smiles automatically. However, the automatic conversion may ignore your manual settings, for example removed hydrogens, kekulized, or canonical smiles.',
              param_type: ['object', 'list'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: [
            {
              name: 'features',
              docstring:
                'A 2-dimensional pandas dataframe of fingerprint features with same number of rows as number of molecules.',
              param_type: ['dataframe'],
              returned: true
            }
          ]
        },
        {
          name: 'store_sparse',
          docstring:
            '\n        This function helps you to store higly sparse fingerprint feature sets using `.npz` format for memory efficiency and\n        less store/load time.\n        Another method of this class, `load_sparse`, enables you to load your `.npz` files and convert it back to pandas dataframe.\n\n        Parameters\n        ----------\n        file : str\n            Must be a path to the file with .npz format.\n\n        features : pandas DataFrame\n            Must be the pandas dataframe as you receive it from `represent` method.\n\n        ',
          inputs: [
            {
              name: 'file',
              docstring: 'Must be a path to the file with .npz format.',
              param_type: ['str'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            },
            {
              name: 'features',
              docstring:
                'Must be the pandas dataframe as you receive it from `represent` method.',
              param_type: ['dataframe'],
              expected_shape: null,
              is_optional: false,
              default_value: null,
              options: null
            }
          ],
          outputs: []
        }
      ],
      nodes: []
    },
    {
      name: 'XYZ',
      docstring:
        '\n    This class stores the information that is typically carried by standard XYZ files.',
      inputs: [
        {
          name: 'geometry',
          docstring:
            'The numpy array of shape (number_of_atoms, 3). It stores the xyz coordinates for each atom of the molecule.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'atomic_numbers',
          docstring:
            'The numpy array of shape (number_of_atoms, 1). It stores the atomic numbers of each atom in the molecule (in the same order as geometry).',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'atomic_symbols',
          docstring:
            'The numpy array of shape (number_of_atoms, 1). It stores the atomic symbols of each atom in the molecule (in the same order as geometry).',
          param_type: ['array'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        }
      ],
      outputs: [],
      node_functions: [],
      nodes: []
    }
  ],
  library: 'chemml',
  module: 'chem'
}
