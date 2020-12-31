export default 
    {
    "name": "sklearn.ensemble",
    "docstring": "",
    "inputs": [],
    "outputs": [],
    "node_functions": [],
    "nodes": [
        {
            "name": "AdaBoostClassifier",
            "docstring": "An AdaBoost classifier.\n\n    An AdaBoost [1] classifier is a meta-estimator that begins by fitting a\n    classifier on the original dataset and then fits additional copies of the\n    classifier on the same dataset but where the weights of incorrectly\n    classified instances are adjusted such that subsequent classifiers focus\n    more on difficult cases.\n\n    This class implements the algorithm known as AdaBoost-SAMME [2].\n\n    Read more in the :ref:`User Guide <adaboost>`.\n\n    .. versionadded:: 0.14\n\n    Parameters\n    ----------\n    base_estimator : object, default=None\n        The base estimator from which the boosted ensemble is built.\n        Support for sample weighting is required, as well as proper\n        ``classes_`` and ``n_classes_`` attributes. If ``None``, then\n        the base estimator is ``DecisionTreeClassifier(max_depth=1)``.\n\n    n_estimators : int, default=50\n        The maximum number of estimators at which boosting is terminated.\n        In case of perfect fit, the learning procedure is stopped early.\n\n    learning_rate : float, default=1.\n        Learning rate shrinks the contribution of each classifier by\n        ``learning_rate``. There is a trade-off between ``learning_rate`` and\n        ``n_estimators``.\n\n    algorithm : {'SAMME', 'SAMME.R'}, default='SAMME.R'\n        If 'SAMME.R' then use the SAMME.R real boosting algorithm.\n        ``base_estimator`` must support calculation of class probabilities.\n        If 'SAMME' then use the SAMME discrete boosting algorithm.\n        The SAMME.R algorithm typically converges faster than SAMME,\n        achieving a lower test error with fewer boosting iterations.\n\n    random_state : int or RandomState, default=None\n        Controls the random seed given at each `base_estimator` at each\n        boosting iteration.\n        Thus, it is only used when `base_estimator` exposes a `random_state`.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    Attributes\n    ----------\n    base_estimator_ : estimator\n        The base estimator from which the ensemble is grown.\n\n    estimators_ : list of classifiers\n        The collection of fitted sub-estimators.\n\n    classes_ : ndarray of shape (n_classes,)\n        The classes labels.\n\n    n_classes_ : int\n        The number of classes.\n\n    estimator_weights_ : ndarray of floats\n        Weights for each estimator in the boosted ensemble.\n\n    estimator_errors_ : ndarray of floats\n        Classification error for each estimator in the boosted\n        ensemble.\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances if supported by the\n        ``base_estimator`` (when based on decision trees).\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    See Also\n    --------\n    AdaBoostRegressor\n        An AdaBoost regressor that begins by fitting a regressor on the\n        original dataset and then fits additional copies of the regressor\n        on the same dataset but where the weights of instances are\n        adjusted according to the error of the current prediction.\n\n    GradientBoostingClassifier\n        GB builds an additive model in a forward stage-wise fashion. Regression\n        trees are fit on the negative gradient of the binomial or multinomial\n        deviance loss function. Binary classification is a special case where\n        only a single regression tree is induced.\n\n    sklearn.tree.DecisionTreeClassifier\n        A non-parametric supervised learning method used for classification.\n        Creates a model that predicts the value of a target variable by\n        learning simple decision rules inferred from the data features.\n\n    References\n    ----------\n    .. [1] Y. Freund, R. Schapire, \"A Decision-Theoretic Generalization of\n           on-Line Learning and an Application to Boosting\", 1995.\n\n    .. [2] J. Zhu, H. Zou, S. Rosset, T. Hastie, \"Multi-class AdaBoost\", 2009.\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import AdaBoostClassifier\n    >>> from sklearn.datasets import make_classification\n    >>> X, y = make_classification(n_samples=1000, n_features=4,\n    ...                            n_informative=2, n_redundant=0,\n    ...                            random_state=0, shuffle=False)\n    >>> clf = AdaBoostClassifier(n_estimators=100, random_state=0)\n    >>> clf.fit(X, y)\n    AdaBoostClassifier(n_estimators=100, random_state=0)\n    >>> clf.predict([[0, 0, 0, 0]])\n    array([1])\n    >>> clf.score(X, y)\n    0.983...\n    ",
            "inputs": [
                {
                    "name": "base_estimator",
                    "docstring": "The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper ``classes_`` and ``n_classes_`` attributes. If ``None``, then the base estimator is ``DecisionTreeClassifier(max_depth=1)``.",
                    "param_type": [
                        "object",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "50",
                    "options": null
                },
                {
                    "name": "learning_rate",
                    "docstring": "Learning rate shrinks the contribution of each classifier by ``learning_rate``. There is a trade-off between ``learning_rate`` and ``n_estimators``.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.",
                    "options": null
                },
                {
                    "name": "algorithm",
                    "docstring": "If 'SAMME.R' then use the SAMME.R real boosting algorithm. ``base_estimator`` must support calculation of class probabilities. If 'SAMME' then use the SAMME discrete boosting algorithm. The SAMME.R algorithm typically converges faster than SAMME, achieving a lower test error with fewer boosting iterations.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "SAMME.R",
                    "options": [
                        "SAMME",
                        "SAMME.R",
                        "default=SAMME.R"
                    ]
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random seed given at each `base_estimator` at each boosting iteration. Thus, it is only used when `base_estimator` exposes a `random_state`. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The base estimator from which the ensemble is grown.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_classes_",
                    "docstring": "The number of classes.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "estimator_weights_",
                    "docstring": "Weights for each estimator in the boosted ensemble.",
                    "param_type": [
                        "array",
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "estimator_errors_",
                    "docstring": "Classification error for each estimator in the boosted ensemble.",
                    "param_type": [
                        "array",
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances if supported by the ``base_estimator`` (when based on decision trees).  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_boost",
                    "docstring": "Implement a single boost.\n\n        Perform a single boost according to the real multi-class SAMME.R\n        algorithm or to the discrete SAMME algorithm and return the updated\n        sample weights.\n\n        Parameters\n        ----------\n        iboost : int\n            The index of the current boost iteration.\n\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels).\n\n        sample_weight : array-like of shape (n_samples,)\n            The current sample weights.\n\n        random_state : RandomState\n            The RandomState instance used if the base estimator accepts a\n            `random_state` attribute.\n\n        Returns\n        -------\n        sample_weight : array-like of shape (n_samples,) or None\n            The reweighted sample weights.\n            If None then boosting has terminated early.\n\n        estimator_weight : float\n            The weight for the current boost.\n            If None then boosting has terminated early.\n\n        estimator_error : float\n            The classification error for the current boost.\n            If None then boosting has terminated early.\n        ",
                    "inputs": [
                        {
                            "name": "iboost",
                            "docstring": "The index of the current boost iteration.",
                            "param_type": [
                                "int"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "X",
                            "docstring": "The training input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "The current sample weights.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "random_state",
                            "docstring": "The RandomState instance used if the base estimator accepts a `random_state` attribute.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "sample_weight",
                            "docstring": "The reweighted sample weights. If None then boosting has terminated early.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "estimator_weight",
                            "docstring": "The weight for the current boost. If None then boosting has terminated early.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        },
                        {
                            "name": "estimator_error",
                            "docstring": "The classification error for the current boost. If None then boosting has terminated early.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_boost_discrete",
                    "docstring": "Implement a single boost using the SAMME discrete algorithm.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_boost_real",
                    "docstring": "Implement a single boost using the SAMME.R real algorithm.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_X",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_compute_proba_from_decision",
                    "docstring": "Compute probabilities from the decision function.\n\n        This is based eq. (4) of [1] where:\n            p(y=c|X) = exp((1 / K-1) f_c(X)) / sum_k(exp((1 / K-1) f_k(X)))\n                     = softmax((1 / K-1) * f(X))\n\n        References\n        ----------\n        .. [1] J. Zhu, H. Zou, S. Rosset, T. Hastie, \"Multi-class AdaBoost\",\n               2009.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and set the base_estimator_ attribute.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "decision_function",
                    "docstring": "Compute the decision function of ``X``.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Returns\n        -------\n        score : ndarray of shape of (n_samples, k)\n            The decision function of the input samples. The order of\n            outputs is the same of that of the :term:`classes_` attribute.\n            Binary classification is a special cases with ``k == 1``,\n            otherwise ``k==n_classes``. For binary classification,\n            values closer to -1 or 1 mean more like the first or second\n            class in ``classes_``, respectively.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "The decision function of the input samples. The order of outputs is the same of that of the :term:`classes_` attribute. Binary classification is a special cases with ``k == 1``, otherwise ``k==n_classes``. For binary classification, values closer to -1 or 1 mean more like the first or second class in ``classes_``, respectively.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "Build a boosted classifier from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, the sample weights are initialized to\n            ``1 / n_samples``.\n\n        Returns\n        -------\n        self : object\n            Fitted estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, the sample weights are initialized to ``1 / n_samples``.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict classes for X.\n\n        The predicted class of an input sample is computed as the weighted mean\n        prediction of the classifiers in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted classes.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted classes.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_log_proba",
                    "docstring": "Predict class log-probabilities for X.\n\n        The predicted class log-probabilities of an input sample is computed as\n        the weighted mean predicted class log-probabilities of the classifiers\n        in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class probabilities of the input samples. The order of\n            outputs is the same of that of the :term:`classes_` attribute.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class probabilities of the input samples. The order of outputs is the same of that of the :term:`classes_` attribute.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "Predict class probabilities for X.\n\n        The predicted class probabilities of an input sample is computed as\n        the weighted mean predicted class probabilities of the classifiers\n        in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class probabilities of the input samples. The order of\n            outputs is the same of that of the :term:`classes_` attribute.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class probabilities of the input samples. The order of outputs is the same of that of the :term:`classes_` attribute.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "staged_decision_function",
                    "docstring": "Compute decision function of ``X`` for each boosting iteration.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each boosting iteration.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Yields\n        ------\n        score : generator of ndarray of shape (n_samples, k)\n            The decision function of the input samples. The order of\n            outputs is the same of that of the :term:`classes_` attribute.\n            Binary classification is a special cases with ``k == 1``,\n            otherwise ``k==n_classes``. For binary classification,\n            values closer to -1 or 1 mean more like the first or second\n            class in ``classes_``, respectively.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "The decision function of the input samples. The order of outputs is the same of that of the :term:`classes_` attribute. Binary classification is a special cases with ``k == 1``, otherwise ``k==n_classes``. For binary classification, values closer to -1 or 1 mean more like the first or second class in ``classes_``, respectively.",
                            "param_type": [
                                "array"
                            ],
                            "returned": false
                        }
                    ]
                },
                {
                    "name": "staged_predict",
                    "docstring": "Return staged predictions for X.\n\n        The predicted class of an input sample is computed as the weighted mean\n        prediction of the classifiers in the ensemble.\n\n        This generator method yields the ensemble prediction after each\n        iteration of boosting and therefore allows monitoring, such as to\n        determine the prediction on a test set after each boost.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            The input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Yields\n        ------\n        y : generator of ndarray of shape (n_samples,)\n            The predicted classes.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted classes.",
                            "param_type": [
                                "array"
                            ],
                            "returned": false
                        }
                    ]
                },
                {
                    "name": "staged_predict_proba",
                    "docstring": "Predict class probabilities for X.\n\n        The predicted class probabilities of an input sample is computed as\n        the weighted mean predicted class probabilities of the classifiers\n        in the ensemble.\n\n        This generator method yields the ensemble predicted class probabilities\n        after each iteration of boosting and therefore allows monitoring, such\n        as to determine the predicted class probabilities on a test set after\n        each boost.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Yields\n        -------\n        p : generator of ndarray of shape (n_samples,)\n            The class probabilities of the input samples. The order of\n            outputs is the same of that of the :term:`classes_` attribute.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class probabilities of the input samples. The order of outputs is the same of that of the :term:`classes_` attribute.",
                            "param_type": [
                                "array"
                            ],
                            "returned": false
                        }
                    ]
                },
                {
                    "name": "staged_score",
                    "docstring": "Return staged scores for X, y.\n\n        This generator method yields the ensemble score after each iteration of\n        boosting and therefore allows monitoring, such as to determine the\n        score on a test set after each boost.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        y : array-like of shape (n_samples,)\n            Labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Yields\n        ------\n        z : float\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "z",
                            "docstring": "",
                            "param_type": [
                                "float"
                            ],
                            "returned": false
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "AdaBoostRegressor",
            "docstring": "An AdaBoost regressor.\n\n    An AdaBoost [1] regressor is a meta-estimator that begins by fitting a\n    regressor on the original dataset and then fits additional copies of the\n    regressor on the same dataset but where the weights of instances are\n    adjusted according to the error of the current prediction. As such,\n    subsequent regressors focus more on difficult cases.\n\n    This class implements the algorithm known as AdaBoost.R2 [2].\n\n    Read more in the :ref:`User Guide <adaboost>`.\n\n    .. versionadded:: 0.14\n\n    Parameters\n    ----------\n    base_estimator : object, default=None\n        The base estimator from which the boosted ensemble is built.\n        If ``None``, then the base estimator is\n        ``DecisionTreeRegressor(max_depth=3)``.\n\n    n_estimators : int, default=50\n        The maximum number of estimators at which boosting is terminated.\n        In case of perfect fit, the learning procedure is stopped early.\n\n    learning_rate : float, default=1.\n        Learning rate shrinks the contribution of each regressor by\n        ``learning_rate``. There is a trade-off between ``learning_rate`` and\n        ``n_estimators``.\n\n    loss : {'linear', 'square', 'exponential'}, default='linear'\n        The loss function to use when updating the weights after each\n        boosting iteration.\n\n    random_state : int or RandomState, default=None\n        Controls the random seed given at each `base_estimator` at each\n        boosting iteration.\n        Thus, it is only used when `base_estimator` exposes a `random_state`.\n        In addition, it controls the bootstrap of the weights used to train the\n        `base_estimator` at each boosting iteration.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    Attributes\n    ----------\n    base_estimator_ : estimator\n        The base estimator from which the ensemble is grown.\n\n    estimators_ : list of classifiers\n        The collection of fitted sub-estimators.\n\n    estimator_weights_ : ndarray of floats\n        Weights for each estimator in the boosted ensemble.\n\n    estimator_errors_ : ndarray of floats\n        Regression error for each estimator in the boosted ensemble.\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances if supported by the\n        ``base_estimator`` (when based on decision trees).\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import AdaBoostRegressor\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_features=4, n_informative=2,\n    ...                        random_state=0, shuffle=False)\n    >>> regr = AdaBoostRegressor(random_state=0, n_estimators=100)\n    >>> regr.fit(X, y)\n    AdaBoostRegressor(n_estimators=100, random_state=0)\n    >>> regr.predict([[0, 0, 0, 0]])\n    array([4.7972...])\n    >>> regr.score(X, y)\n    0.9771...\n\n    See also\n    --------\n    AdaBoostClassifier, GradientBoostingRegressor,\n    sklearn.tree.DecisionTreeRegressor\n\n    References\n    ----------\n    .. [1] Y. Freund, R. Schapire, \"A Decision-Theoretic Generalization of\n           on-Line Learning and an Application to Boosting\", 1995.\n\n    .. [2] H. Drucker, \"Improving Regressors using Boosting Techniques\", 1997.\n\n    ",
            "inputs": [
                {
                    "name": "base_estimator",
                    "docstring": "The base estimator from which the boosted ensemble is built. If ``None``, then the base estimator is ``DecisionTreeRegressor(max_depth=3)``.",
                    "param_type": [
                        "object",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "50",
                    "options": null
                },
                {
                    "name": "learning_rate",
                    "docstring": "Learning rate shrinks the contribution of each regressor by ``learning_rate``. There is a trade-off between ``learning_rate`` and ``n_estimators``.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.",
                    "options": null
                },
                {
                    "name": "loss",
                    "docstring": "The loss function to use when updating the weights after each boosting iteration.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "linear",
                    "options": [
                        "linear",
                        "square",
                        "exponential",
                        "default=linear"
                    ]
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random seed given at each `base_estimator` at each boosting iteration. Thus, it is only used when `base_estimator` exposes a `random_state`. In addition, it controls the bootstrap of the weights used to train the `base_estimator` at each boosting iteration. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The base estimator from which the ensemble is grown.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimator_weights_",
                    "docstring": "Weights for each estimator in the boosted ensemble.",
                    "param_type": [
                        "array",
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "estimator_errors_",
                    "docstring": "Regression error for each estimator in the boosted ensemble.",
                    "param_type": [
                        "array",
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances if supported by the ``base_estimator`` (when based on decision trees).  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_boost",
                    "docstring": "Implement a single boost for regression\n\n        Perform a single boost according to the AdaBoost.R2 algorithm and\n        return the updated sample weights.\n\n        Parameters\n        ----------\n        iboost : int\n            The index of the current boost iteration.\n\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,)\n            The current sample weights.\n\n        random_state : RandomState\n            The RandomState instance used if the base estimator accepts a\n            `random_state` attribute.\n            Controls also the bootstrap of the weights used to train the weak\n            learner.\n            replacement.\n\n        Returns\n        -------\n        sample_weight : array-like of shape (n_samples,) or None\n            The reweighted sample weights.\n            If None then boosting has terminated early.\n\n        estimator_weight : float\n            The weight for the current boost.\n            If None then boosting has terminated early.\n\n        estimator_error : float\n            The regression error for the current boost.\n            If None then boosting has terminated early.\n        ",
                    "inputs": [
                        {
                            "name": "iboost",
                            "docstring": "The index of the current boost iteration.",
                            "param_type": [
                                "int"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "X",
                            "docstring": "The training input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "The current sample weights.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "random_state",
                            "docstring": "The RandomState instance used if the base estimator accepts a `random_state` attribute. Controls also the bootstrap of the weights used to train the weak learner. replacement.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "sample_weight",
                            "docstring": "The reweighted sample weights. If None then boosting has terminated early.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "estimator_weight",
                            "docstring": "The weight for the current boost. If None then boosting has terminated early.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        },
                        {
                            "name": "estimator_error",
                            "docstring": "The regression error for the current boost. If None then boosting has terminated early.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_check_X",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_median_predict",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and set the base_estimator_ attribute.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "fit",
                    "docstring": "Build a boosted regressor from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        y : array-like of shape (n_samples,)\n            The target values (real numbers).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, the sample weights are initialized to\n            1 / n_samples.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (real numbers).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, the sample weights are initialized to 1 / n_samples.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict regression value for X.\n\n        The predicted regression value of an input sample is computed\n        as the weighted median prediction of the classifiers in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted regression values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted regression values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "staged_predict",
                    "docstring": "Return staged predictions for X.\n\n        The predicted regression value of an input sample is computed\n        as the weighted median prediction of the classifiers in the ensemble.\n\n        This generator method yields the ensemble prediction after each\n        iteration of boosting and therefore allows monitoring, such as to\n        determine the prediction on a test set after each boost.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples.\n\n        Yields\n        -------\n        y : generator of ndarray of shape (n_samples,)\n            The predicted regression values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted regression values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": false
                        }
                    ]
                },
                {
                    "name": "staged_score",
                    "docstring": "Return staged scores for X, y.\n\n        This generator method yields the ensemble score after each iteration of\n        boosting and therefore allows monitoring, such as to determine the\n        score on a test set after each boost.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrix can be CSC, CSR, COO,\n            DOK, or LIL. COO, DOK, and LIL are converted to CSR.\n\n        y : array-like of shape (n_samples,)\n            Labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Yields\n        ------\n        z : float\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "z",
                            "docstring": "",
                            "param_type": [
                                "float"
                            ],
                            "returned": false
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "BaggingClassifier",
            "docstring": "A Bagging classifier.\n\n    A Bagging classifier is an ensemble meta-estimator that fits base\n    classifiers each on random subsets of the original dataset and then\n    aggregate their individual predictions (either by voting or by averaging)\n    to form a final prediction. Such a meta-estimator can typically be used as\n    a way to reduce the variance of a black-box estimator (e.g., a decision\n    tree), by introducing randomization into its construction procedure and\n    then making an ensemble out of it.\n\n    This algorithm encompasses several works from the literature. When random\n    subsets of the dataset are drawn as random subsets of the samples, then\n    this algorithm is known as Pasting [1]_. If samples are drawn with\n    replacement, then the method is known as Bagging [2]_. When random subsets\n    of the dataset are drawn as random subsets of the features, then the method\n    is known as Random Subspaces [3]_. Finally, when base estimators are built\n    on subsets of both samples and features, then the method is known as\n    Random Patches [4]_.\n\n    Read more in the :ref:`User Guide <bagging>`.\n\n    .. versionadded:: 0.15\n\n    Parameters\n    ----------\n    base_estimator : object, default=None\n        The base estimator to fit on random subsets of the dataset.\n        If None, then the base estimator is a decision tree.\n\n    n_estimators : int, default=10\n        The number of base estimators in the ensemble.\n\n    max_samples : int or float, default=1.0\n        The number of samples to draw from X to train each base estimator (with\n        replacement by default, see `bootstrap` for more details).\n\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples.\n\n    max_features : int or float, default=1.0\n        The number of features to draw from X to train each base estimator (\n        without replacement by default, see `bootstrap_features` for more\n        details).\n\n        - If int, then draw `max_features` features.\n        - If float, then draw `max_features * X.shape[1]` features.\n\n    bootstrap : bool, default=True\n        Whether samples are drawn with replacement. If False, sampling\n        without replacement is performed.\n\n    bootstrap_features : bool, default=False\n        Whether features are drawn with replacement.\n\n    oob_score : bool, default=False\n        Whether to use out-of-bag samples to estimate\n        the generalization error.\n\n    warm_start : bool, default=False\n        When set to True, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit\n        a whole new ensemble. See :term:`the Glossary <warm_start>`.\n\n        .. versionadded:: 0.17\n           *warm_start* constructor parameter.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for both :meth:`fit` and\n        :meth:`predict`. ``None`` means 1 unless in a\n        :obj:`joblib.parallel_backend` context. ``-1`` means using all\n        processors. See :term:`Glossary <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls the random resampling of the original dataset\n        (sample wise and feature wise).\n        If the base estimator accepts a `random_state` attribute, a different\n        seed is generated for each instance in the ensemble.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    Attributes\n    ----------\n    base_estimator_ : estimator\n        The base estimator from which the ensemble is grown.\n\n    n_features_ : int\n        The number of features when :meth:`fit` is performed.\n\n    estimators_ : list of estimators\n        The collection of fitted base estimators.\n\n    estimators_samples_ : list of arrays\n        The subset of drawn samples (i.e., the in-bag samples) for each base\n        estimator. Each subset is defined by an array of the indices selected.\n\n    estimators_features_ : list of arrays\n        The subset of drawn features for each base estimator.\n\n    classes_ : ndarray of shape (n_classes,)\n        The classes labels.\n\n    n_classes_ : int or list\n        The number of classes.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_decision_function_ : ndarray of shape (n_samples, n_classes)\n        Decision function computed with out-of-bag estimate on the training\n        set. If n_estimators is small it might be possible that a data point\n        was never left out during the bootstrap. In this case,\n        `oob_decision_function_` might contain NaN. This attribute exists\n        only when ``oob_score`` is True.\n\n    Examples\n    --------\n    >>> from sklearn.svm import SVC\n    >>> from sklearn.ensemble import BaggingClassifier\n    >>> from sklearn.datasets import make_classification\n    >>> X, y = make_classification(n_samples=100, n_features=4,\n    ...                            n_informative=2, n_redundant=0,\n    ...                            random_state=0, shuffle=False)\n    >>> clf = BaggingClassifier(base_estimator=SVC(),\n    ...                         n_estimators=10, random_state=0).fit(X, y)\n    >>> clf.predict([[0, 0, 0, 0]])\n    array([1])\n\n    References\n    ----------\n\n    .. [1] L. Breiman, \"Pasting small votes for classification in large\n           databases and on-line\", Machine Learning, 36(1), 85-103, 1999.\n\n    .. [2] L. Breiman, \"Bagging predictors\", Machine Learning, 24(2), 123-140,\n           1996.\n\n    .. [3] T. Ho, \"The random subspace method for constructing decision\n           forests\", Pattern Analysis and Machine Intelligence, 20(8), 832-844,\n           1998.\n\n    .. [4] G. Louppe and P. Geurts, \"Ensembles on Random Patches\", Machine\n           Learning and Knowledge Discovery in Databases, 346-361, 2012.\n    ",
            "inputs": [
                {
                    "name": "base_estimator",
                    "docstring": "The base estimator to fit on random subsets of the dataset. If None, then the base estimator is a decision tree.",
                    "param_type": [
                        "object",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The number of base estimators in the ensemble.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "10",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).  - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap_features` for more details).  - If int, then draw `max_features` features. - If float, then draw `max_features * X.shape[1]` features.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether samples are drawn with replacement. If False, sampling without replacement is performed.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "bootstrap_features",
                    "docstring": "Whether features are drawn with replacement.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "Whether to use out-of-bag samples to estimate the generalization error.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to True, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See :term:`the Glossary <warm_start>`.  .. versionadded:: 0.17    *warm_start* constructor parameter.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for both :meth:`fit` and :meth:`predict`. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The base estimator from which the ensemble is grown.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features when :meth:`fit` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted base estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_samples_",
                    "docstring": "The subset of drawn samples (i.e., the in-bag samples) for each base estimator. Each subset is defined by an array of the indices selected.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_features_",
                    "docstring": "The subset of drawn features for each base estimator.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_classes_",
                    "docstring": "The number of classes.",
                    "param_type": [
                        "int",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_decision_function_",
                    "docstring": "Decision function computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob_decision_function_` might contain NaN. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_fit",
                    "docstring": "Build a Bagging ensemble of estimators from the training\n           set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        max_samples : int or float, default=None\n            Argument to use instead of self.max_samples.\n\n        max_depth : int, default=None\n            Override value used when constructing base estimator. Only\n            supported if the base estimator has a max_depth parameter.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if the base estimator supports\n            sample weighting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "max_samples",
                            "docstring": "Argument to use instead of self.max_samples.",
                            "param_type": [
                                "int",
                                "float",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "max_depth",
                            "docstring": "Override value used when constructing base estimator. Only supported if the base estimator has a max_depth parameter.",
                            "param_type": [
                                "int",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_estimators_indices",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_parallel_args",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and set the base_estimator_ attribute.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "decision_function",
                    "docstring": "Average of the decision functions of the base classifiers.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        Returns\n        -------\n        score : ndarray of shape (n_samples, k)\n            The decision function of the input samples. The columns correspond\n            to the classes in sorted order, as they appear in the attribute\n            ``classes_``. Regression and binary classification are special\n            cases with ``k == 1``, otherwise ``k==n_classes``.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "The decision function of the input samples. The columns correspond to the classes in sorted order, as they appear in the attribute ``classes_``. Regression and binary classification are special cases with ``k == 1``, otherwise ``k==n_classes``.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "Build a Bagging ensemble of estimators from the training\n           set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if the base estimator supports\n            sample weighting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict class for X.\n\n        The predicted class of an input sample is computed as the class with\n        the highest mean predicted probability. If base estimators do not\n        implement a ``predict_proba`` method, then it resorts to voting.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted classes.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted classes.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_log_proba",
                    "docstring": "Predict class log-probabilities for X.\n\n        The predicted class log-probabilities of an input sample is computed as\n        the log of the mean predicted class probabilities of the base\n        estimators in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class log-probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class log-probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "Predict class probabilities for X.\n\n        The predicted class probabilities of an input sample is computed as\n        the mean predicted class probabilities of the base estimators in the\n        ensemble. If base estimators do not implement a ``predict_proba``\n        method, then it resorts to voting and the predicted class probabilities\n        of an input sample represents the proportion of estimators predicting\n        each class.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "BaggingRegressor",
            "docstring": "A Bagging regressor.\n\n    A Bagging regressor is an ensemble meta-estimator that fits base\n    regressors each on random subsets of the original dataset and then\n    aggregate their individual predictions (either by voting or by averaging)\n    to form a final prediction. Such a meta-estimator can typically be used as\n    a way to reduce the variance of a black-box estimator (e.g., a decision\n    tree), by introducing randomization into its construction procedure and\n    then making an ensemble out of it.\n\n    This algorithm encompasses several works from the literature. When random\n    subsets of the dataset are drawn as random subsets of the samples, then\n    this algorithm is known as Pasting [1]_. If samples are drawn with\n    replacement, then the method is known as Bagging [2]_. When random subsets\n    of the dataset are drawn as random subsets of the features, then the method\n    is known as Random Subspaces [3]_. Finally, when base estimators are built\n    on subsets of both samples and features, then the method is known as\n    Random Patches [4]_.\n\n    Read more in the :ref:`User Guide <bagging>`.\n\n    .. versionadded:: 0.15\n\n    Parameters\n    ----------\n    base_estimator : object, default=None\n        The base estimator to fit on random subsets of the dataset.\n        If None, then the base estimator is a decision tree.\n\n    n_estimators : int, default=10\n        The number of base estimators in the ensemble.\n\n    max_samples : int or float, default=1.0\n        The number of samples to draw from X to train each base estimator (with\n        replacement by default, see `bootstrap` for more details).\n\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples.\n\n    max_features : int or float, default=1.0\n        The number of features to draw from X to train each base estimator (\n        without replacement by default, see `bootstrap_features` for more\n        details).\n\n        - If int, then draw `max_features` features.\n        - If float, then draw `max_features * X.shape[1]` features.\n\n    bootstrap : bool, default=True\n        Whether samples are drawn with replacement. If False, sampling\n        without replacement is performed.\n\n    bootstrap_features : bool, default=False\n        Whether features are drawn with replacement.\n\n    oob_score : bool, default=False\n        Whether to use out-of-bag samples to estimate\n        the generalization error.\n\n    warm_start : bool, default=False\n        When set to True, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit\n        a whole new ensemble. See :term:`the Glossary <warm_start>`.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for both :meth:`fit` and\n        :meth:`predict`. ``None`` means 1 unless in a\n        :obj:`joblib.parallel_backend` context. ``-1`` means using all\n        processors. See :term:`Glossary <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls the random resampling of the original dataset\n        (sample wise and feature wise).\n        If the base estimator accepts a `random_state` attribute, a different\n        seed is generated for each instance in the ensemble.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    Attributes\n    ----------\n    base_estimator_ : estimator\n        The base estimator from which the ensemble is grown.\n\n    n_features_ : int\n        The number of features when :meth:`fit` is performed.\n\n    estimators_ : list of estimators\n        The collection of fitted sub-estimators.\n\n    estimators_samples_ : list of arrays\n        The subset of drawn samples (i.e., the in-bag samples) for each base\n        estimator. Each subset is defined by an array of the indices selected.\n\n    estimators_features_ : list of arrays\n        The subset of drawn features for each base estimator.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_prediction_ : ndarray of shape (n_samples,)\n        Prediction computed with out-of-bag estimate on the training\n        set. If n_estimators is small it might be possible that a data point\n        was never left out during the bootstrap. In this case,\n        `oob_prediction_` might contain NaN. This attribute exists only\n        when ``oob_score`` is True.\n\n    Examples\n    --------\n    >>> from sklearn.svm import SVR\n    >>> from sklearn.ensemble import BaggingRegressor\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_samples=100, n_features=4,\n    ...                        n_informative=2, n_targets=1,\n    ...                        random_state=0, shuffle=False)\n    >>> regr = BaggingRegressor(base_estimator=SVR(),\n    ...                         n_estimators=10, random_state=0).fit(X, y)\n    >>> regr.predict([[0, 0, 0, 0]])\n    array([-2.8720...])\n\n    References\n    ----------\n\n    .. [1] L. Breiman, \"Pasting small votes for classification in large\n           databases and on-line\", Machine Learning, 36(1), 85-103, 1999.\n\n    .. [2] L. Breiman, \"Bagging predictors\", Machine Learning, 24(2), 123-140,\n           1996.\n\n    .. [3] T. Ho, \"The random subspace method for constructing decision\n           forests\", Pattern Analysis and Machine Intelligence, 20(8), 832-844,\n           1998.\n\n    .. [4] G. Louppe and P. Geurts, \"Ensembles on Random Patches\", Machine\n           Learning and Knowledge Discovery in Databases, 346-361, 2012.\n    ",
            "inputs": [
                {
                    "name": "base_estimator",
                    "docstring": "The base estimator to fit on random subsets of the dataset. If None, then the base estimator is a decision tree.",
                    "param_type": [
                        "object",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The number of base estimators in the ensemble.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "10",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).  - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap_features` for more details).  - If int, then draw `max_features` features. - If float, then draw `max_features * X.shape[1]` features.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether samples are drawn with replacement. If False, sampling without replacement is performed.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "bootstrap_features",
                    "docstring": "Whether features are drawn with replacement.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "Whether to use out-of-bag samples to estimate the generalization error.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to True, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for both :meth:`fit` and :meth:`predict`. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The base estimator from which the ensemble is grown.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features when :meth:`fit` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_samples_",
                    "docstring": "The subset of drawn samples (i.e., the in-bag samples) for each base estimator. Each subset is defined by an array of the indices selected.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_features_",
                    "docstring": "The subset of drawn features for each base estimator.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_prediction_",
                    "docstring": "Prediction computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob_prediction_` might contain NaN. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_fit",
                    "docstring": "Build a Bagging ensemble of estimators from the training\n           set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        max_samples : int or float, default=None\n            Argument to use instead of self.max_samples.\n\n        max_depth : int, default=None\n            Override value used when constructing base estimator. Only\n            supported if the base estimator has a max_depth parameter.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if the base estimator supports\n            sample weighting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "max_samples",
                            "docstring": "Argument to use instead of self.max_samples.",
                            "param_type": [
                                "int",
                                "float",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "max_depth",
                            "docstring": "Override value used when constructing base estimator. Only supported if the base estimator has a max_depth parameter.",
                            "param_type": [
                                "int",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_estimators_indices",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_parallel_args",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and set the base_estimator_ attribute.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "fit",
                    "docstring": "Build a Bagging ensemble of estimators from the training\n           set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if the base estimator supports\n            sample weighting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict regression target for X.\n\n        The predicted regression target of an input sample is computed as the\n        mean predicted regression targets of the estimators in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "BaseEnsemble",
            "docstring": "Base class for all ensemble classes.\n\n    Warning: This class should not be used directly. Use derived classes\n    instead.\n\n    Parameters\n    ----------\n    base_estimator : object\n        The base estimator from which the ensemble is built.\n\n    n_estimators : int, default=10\n        The number of estimators in the ensemble.\n\n    estimator_params : list of str, default=tuple()\n        The list of attributes to use as parameters when instantiating a\n        new base estimator. If none are given, default parameters are used.\n\n    Attributes\n    ----------\n    base_estimator_ : estimator\n        The base estimator from which the ensemble is grown.\n\n    estimators_ : list of estimators\n        The collection of fitted base estimators.\n    ",
            "inputs": [
                {
                    "name": "base_estimator",
                    "docstring": "The base estimator from which the ensemble is built.",
                    "param_type": [
                        "object"
                    ],
                    "expected_shape": null,
                    "is_optional": false,
                    "default_value": null,
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The number of estimators in the ensemble.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "10",
                    "options": null
                },
                {
                    "name": "estimator_params",
                    "docstring": "The list of attributes to use as parameters when instantiating a new base estimator. If none are given, default parameters are used.",
                    "param_type": [
                        "str",
                        "list",
                        "tuple"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "tuple",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The base estimator from which the ensemble is grown.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted base estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "ExtraTreesClassifier",
            "docstring": "\n    An extra-trees classifier.\n\n    This class implements a meta estimator that fits a number of\n    randomized decision trees (a.k.a. extra-trees) on various sub-samples\n    of the dataset and uses averaging to improve the predictive accuracy\n    and control over-fitting.\n\n    Read more in the :ref:`User Guide <forest>`.\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        The number of trees in the forest.\n\n        .. versionchanged:: 0.22\n           The default value of ``n_estimators`` changed from 10 to 100\n           in 0.22.\n\n    criterion : {\"gini\", \"entropy\"}, default=\"gini\"\n        The function to measure the quality of a split. Supported criteria are\n        \"gini\" for the Gini impurity and \"entropy\" for the information gain.\n\n    max_depth : int, default=None\n        The maximum depth of the tree. If None, then nodes are expanded until\n        all leaves are pure or until all leaves contain less than\n        min_samples_split samples.\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_features : {\"auto\", \"sqrt\", \"log2\"}, int or float, default=\"auto\"\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If \"auto\", then `max_features=sqrt(n_features)`.\n        - If \"sqrt\", then `max_features=sqrt(n_features)`.\n        - If \"log2\", then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    bootstrap : bool, default=False\n        Whether bootstrap samples are used when building trees. If False, the\n        whole dataset is used to build each tree.\n\n    oob_score : bool, default=False\n        Whether to use out-of-bag samples to estimate\n        the generalization accuracy.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`,\n        :meth:`decision_path` and :meth:`apply` are all parallelized over the\n        trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors. See :term:`Glossary\n        <n_jobs>` for more details.\n\n    random_state : int, RandomState, default=None\n        Controls 3 sources of randomness:\n\n        - the bootstrapping of the samples used when building trees\n          (if ``bootstrap=True``)\n        - the sampling of the features to consider when looking for the best\n          split at each node (if ``max_features < n_features``)\n        - the draw of the splits for each of the `max_features`\n\n        See :term:`Glossary <random_state>` for details.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n    class_weight : {\"balanced\", \"balanced_subsample\"}, dict or list of dicts,             default=None\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one. For\n        multi-output problems, a list of dicts can be provided in the same\n        order as the columns of y.\n\n        Note that for multioutput (including multilabel) weights should be\n        defined for each class of every column in its own dict. For example,\n        for four-class multilabel classification weights should be\n        [{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}] instead of\n        [{1:1}, {2:5}, {3:1}, {4:1}].\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n        The \"balanced_subsample\" mode is the same as \"balanced\" except that\n        weights are computed based on the bootstrap sample for every tree\n        grown.\n\n        For multi-output, the weights of each column of y will be multiplied.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    max_samples : int or float, default=None\n        If bootstrap is True, the number of samples to draw from X\n        to train each base estimator.\n\n        - If None (default), then draw `X.shape[0]` samples.\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples. Thus,\n          `max_samples` should be in the interval `(0, 1)`.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    base_estimator_ : ExtraTreesClassifier\n        The child estimator template used to create the collection of fitted\n        sub-estimators.\n\n    estimators_ : list of DecisionTreeClassifier\n        The collection of fitted sub-estimators.\n\n    classes_ : ndarray of shape (n_classes,) or a list of such arrays\n        The classes labels (single output problem), or a list of arrays of\n        class labels (multi-output problem).\n\n    n_classes_ : int or list\n        The number of classes (single output problem), or a list containing the\n        number of classes for each output (multi-output problem).\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    n_features_ : int\n        The number of features when ``fit`` is performed.\n\n    n_outputs_ : int\n        The number of outputs when ``fit`` is performed.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_decision_function_ : ndarray of shape (n_samples, n_classes)\n        Decision function computed with out-of-bag estimate on the training\n        set. If n_estimators is small it might be possible that a data point\n        was never left out during the bootstrap. In this case,\n        `oob_decision_function_` might contain NaN. This attribute exists\n        only when ``oob_score`` is True.\n\n    See Also\n    --------\n    sklearn.tree.ExtraTreeClassifier : Base classifier for this ensemble.\n    RandomForestClassifier : Ensemble Classifier based on trees with optimal\n        splits.\n\n    Notes\n    -----\n    The default values for the parameters controlling the size of the trees\n    (e.g. ``max_depth``, ``min_samples_leaf``, etc.) lead to fully grown and\n    unpruned trees which can potentially be very large on some data sets. To\n    reduce memory consumption, the complexity and size of the trees should be\n    controlled by setting those parameter values.\n\n    References\n    ----------\n    .. [1] P. Geurts, D. Ernst., and L. Wehenkel, \"Extremely randomized\n           trees\", Machine Learning, 63(1), 3-42, 2006.\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import ExtraTreesClassifier\n    >>> from sklearn.datasets import make_classification\n    >>> X, y = make_classification(n_features=4, random_state=0)\n    >>> clf = ExtraTreesClassifier(n_estimators=100, random_state=0)\n    >>> clf.fit(X, y)\n    ExtraTreesClassifier(random_state=0)\n    >>> clf.predict([[0, 0, 0, 0]])\n    array([1])\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "The number of trees in the forest.  .. versionchanged:: 0.22    The default value of ``n_estimators`` changed from 10 to 100    in 0.22.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are \"gini\" for the Gini impurity and \"entropy\" for the information gain.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"gini\"",
                    "options": [
                        "gini",
                        "entropy",
                        "default=gini"
                    ]
                },
                {
                    "name": "max_depth",
                    "docstring": "The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If \"auto\", then `max_features=sqrt(n_features)`. - If \"sqrt\", then `max_features=sqrt(n_features)`. - If \"log2\", then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"auto\"",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2",
                        "int or float",
                        "default=auto"
                    ]
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether bootstrap samples are used when building trees. If False, the whole dataset is used to build each tree.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "Whether to use out-of-bag samples to estimate the generalization accuracy.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`, :meth:`decision_path` and :meth:`apply` are all parallelized over the trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls 3 sources of randomness:  - the bootstrapping of the samples used when building trees   (if ``bootstrap=True``) - the sampling of the features to consider when looking for the best   split at each node (if ``max_features < n_features``) - the draw of the splits for each of the `max_features`  See :term:`Glossary <random_state>` for details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "class_weight",
                    "docstring": "Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.  Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be [{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}] instead of [{1:1}, {2:5}, {3:1}, {4:1}].  The \"balanced\" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``  The \"balanced_subsample\" mode is the same as \"balanced\" except that weights are computed based on the bootstrap sample for every tree grown.  For multi-output, the weights of each column of y will be multiplied.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "dict",
                        "list",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": [
                        "balanced",
                        "balanced_subsample",
                        "dict or list of dicts",
                        "default=None"
                    ]
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "If bootstrap is True, the number of samples to draw from X to train each base estimator.  - If None (default), then draw `X.shape[0]` samples. - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples. Thus,   `max_samples` should be in the interval `(0, 1)`.  .. versionadded:: 0.22",
                    "param_type": [
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The child estimator template used to create the collection of fitted sub-estimators.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "n_classes_",
                    "docstring": "The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).",
                    "param_type": [
                        "int",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "n_outputs_",
                    "docstring": "The number of outputs when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_decision_function_",
                    "docstring": "Decision function computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob_decision_function_` might contain NaN. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "\n        Compute out-of-bag score.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_X_predict",
                    "docstring": "\n        Validate X whenever one tries to predict, apply, predict_proba.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y_class_weight",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "\n        Apply trees in the forest to X, return leaf indices.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : ndarray of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the forest,\n            return the index of the leaf x ends up in.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the forest, return the index of the leaf x ends up in.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_path",
                    "docstring": "\n        Return the decision path in the forest.\n\n        .. versionadded:: 0.18\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        indicator : sparse matrix of shape (n_samples, n_nodes)\n            Return a node indicator matrix where non zero elements indicates\n            that the samples goes through the nodes. The matrix is of CSR\n            format.\n\n        n_nodes_ptr : ndarray of shape (n_estimators + 1,)\n            The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]]\n            gives the indicator value for the i-th estimator.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "indicator",
                            "docstring": "Return a node indicator matrix where non zero elements indicates that the samples goes through the nodes. The matrix is of CSR format.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "n_nodes_ptr",
                            "docstring": "The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]] gives the indicator value for the i-th estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Build a forest of trees from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Internally, its dtype will be converted\n            to ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csc_matrix``.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "\n        Predict class for X.\n\n        The predicted class of an input sample is a vote by the trees in\n        the forest, weighted by their probability estimates. That is,\n        the predicted class is the one with highest mean probability\n        estimate across the trees.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,) or (n_samples, n_outputs)\n            The predicted classes.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted classes.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_log_proba",
                    "docstring": "\n        Predict class log-probabilities for X.\n\n        The predicted class log-probabilities of an input sample is computed as\n        the log of the mean predicted class probabilities of the trees in the\n        forest.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes), or a list of n_outputs\n            such arrays if n_outputs > 1.\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "such arrays if n_outputs > 1. The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array",
                                "list"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "\n        Predict class probabilities for X.\n\n        The predicted class probabilities of an input sample are computed as\n        the mean predicted class probabilities of the trees in the forest.\n        The class probability of a single tree is the fraction of samples of\n        the same class in a leaf.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes), or a list of n_outputs\n            such arrays if n_outputs > 1.\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "such arrays if n_outputs > 1. The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array",
                                "list"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "ExtraTreesRegressor",
            "docstring": "\n    An extra-trees regressor.\n\n    This class implements a meta estimator that fits a number of\n    randomized decision trees (a.k.a. extra-trees) on various sub-samples\n    of the dataset and uses averaging to improve the predictive accuracy\n    and control over-fitting.\n\n    Read more in the :ref:`User Guide <forest>`.\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        The number of trees in the forest.\n\n        .. versionchanged:: 0.22\n           The default value of ``n_estimators`` changed from 10 to 100\n           in 0.22.\n\n    criterion : {\"mse\", \"mae\"}, default=\"mse\"\n        The function to measure the quality of a split. Supported criteria\n        are \"mse\" for the mean squared error, which is equal to variance\n        reduction as feature selection criterion, and \"mae\" for the mean\n        absolute error.\n\n        .. versionadded:: 0.18\n           Mean Absolute Error (MAE) criterion.\n\n    max_depth : int, default=None\n        The maximum depth of the tree. If None, then nodes are expanded until\n        all leaves are pure or until all leaves contain less than\n        min_samples_split samples.\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_features : {\"auto\", \"sqrt\", \"log2\"} int or float, default=\"auto\"\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If \"auto\", then `max_features=n_features`.\n        - If \"sqrt\", then `max_features=sqrt(n_features)`.\n        - If \"log2\", then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    bootstrap : bool, default=False\n        Whether bootstrap samples are used when building trees. If False, the\n        whole dataset is used to build each tree.\n\n    oob_score : bool, default=False\n        Whether to use out-of-bag samples to estimate the R^2 on unseen data.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`,\n        :meth:`decision_path` and :meth:`apply` are all parallelized over the\n        trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors. See :term:`Glossary\n        <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls 3 sources of randomness:\n\n        - the bootstrapping of the samples used when building trees\n          (if ``bootstrap=True``)\n        - the sampling of the features to consider when looking for the best\n          split at each node (if ``max_features < n_features``)\n        - the draw of the splits for each of the `max_features`\n\n        See :term:`Glossary <random_state>` for details.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    max_samples : int or float, default=None\n        If bootstrap is True, the number of samples to draw from X\n        to train each base estimator.\n\n        - If None (default), then draw `X.shape[0]` samples.\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples. Thus,\n          `max_samples` should be in the interval `(0, 1)`.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    base_estimator_ : ExtraTreeRegressor\n        The child estimator template used to create the collection of fitted\n        sub-estimators.\n\n    estimators_ : list of DecisionTreeRegressor\n        The collection of fitted sub-estimators.\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    n_features_ : int\n        The number of features.\n\n    n_outputs_ : int\n        The number of outputs.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_prediction_ : ndarray of shape (n_samples,)\n        Prediction computed with out-of-bag estimate on the training set.\n        This attribute exists only when ``oob_score`` is True.\n\n    See Also\n    --------\n    sklearn.tree.ExtraTreeRegressor: Base estimator for this ensemble.\n    RandomForestRegressor: Ensemble regressor using trees with optimal splits.\n\n    Notes\n    -----\n    The default values for the parameters controlling the size of the trees\n    (e.g. ``max_depth``, ``min_samples_leaf``, etc.) lead to fully grown and\n    unpruned trees which can potentially be very large on some data sets. To\n    reduce memory consumption, the complexity and size of the trees should be\n    controlled by setting those parameter values.\n\n    References\n    ----------\n    .. [1] P. Geurts, D. Ernst., and L. Wehenkel, \"Extremely randomized trees\",\n           Machine Learning, 63(1), 3-42, 2006.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_diabetes\n    >>> from sklearn.model_selection import train_test_split\n    >>> from sklearn.ensemble import ExtraTreesRegressor\n    >>> X, y = load_diabetes(return_X_y=True)\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, random_state=0)\n    >>> reg = ExtraTreesRegressor(n_estimators=100, random_state=0).fit(\n    ...    X_train, y_train)\n    >>> reg.score(X_test, y_test)\n    0.2708...\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "The number of trees in the forest.  .. versionchanged:: 0.22    The default value of ``n_estimators`` changed from 10 to 100    in 0.22.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are \"mse\" for the mean squared error, which is equal to variance reduction as feature selection criterion, and \"mae\" for the mean absolute error.  .. versionadded:: 0.18    Mean Absolute Error (MAE) criterion.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"mse\"",
                    "options": [
                        "mse",
                        "mae",
                        "default=mse"
                    ]
                },
                {
                    "name": "max_depth",
                    "docstring": "The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If \"auto\", then `max_features=n_features`. - If \"sqrt\", then `max_features=sqrt(n_features)`. - If \"log2\", then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"auto\"",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2 int or float",
                        "default=auto"
                    ]
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether bootstrap samples are used when building trees. If False, the whole dataset is used to build each tree.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "Whether to use out-of-bag samples to estimate the R^2 on unseen data.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`, :meth:`decision_path` and :meth:`apply` are all parallelized over the trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls 3 sources of randomness:  - the bootstrapping of the samples used when building trees   (if ``bootstrap=True``) - the sampling of the features to consider when looking for the best   split at each node (if ``max_features < n_features``) - the draw of the splits for each of the `max_features`  See :term:`Glossary <random_state>` for details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "If bootstrap is True, the number of samples to draw from X to train each base estimator.  - If None (default), then draw `X.shape[0]` samples. - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples. Thus,   `max_samples` should be in the interval `(0, 1)`.  .. versionadded:: 0.22",
                    "param_type": [
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The child estimator template used to create the collection of fitted sub-estimators.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "n_outputs_",
                    "docstring": "The number of outputs.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_prediction_",
                    "docstring": "Prediction computed with out-of-bag estimate on the training set. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_compute_partial_dependence_recursion",
                    "docstring": "Fast partial dependence computation.\n\n        Parameters\n        ----------\n        grid : ndarray of shape (n_samples, n_target_features)\n            The grid points on which the partial dependence should be\n            evaluated.\n        target_features : ndarray of shape (n_target_features)\n            The set of target features for which the partial dependence\n            should be evaluated.\n\n        Returns\n        -------\n        averaged_predictions : ndarray of shape (n_samples,)\n            The value of the partial dependence function on each grid point.\n        ",
                    "inputs": [
                        {
                            "name": "grid",
                            "docstring": "The grid points on which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "target_features",
                            "docstring": "The set of target features for which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "averaged_predictions",
                            "docstring": "The value of the partial dependence function on each grid point.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "\n        Compute out-of-bag scores.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_X_predict",
                    "docstring": "\n        Validate X whenever one tries to predict, apply, predict_proba.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y_class_weight",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "\n        Apply trees in the forest to X, return leaf indices.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : ndarray of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the forest,\n            return the index of the leaf x ends up in.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the forest, return the index of the leaf x ends up in.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_path",
                    "docstring": "\n        Return the decision path in the forest.\n\n        .. versionadded:: 0.18\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        indicator : sparse matrix of shape (n_samples, n_nodes)\n            Return a node indicator matrix where non zero elements indicates\n            that the samples goes through the nodes. The matrix is of CSR\n            format.\n\n        n_nodes_ptr : ndarray of shape (n_estimators + 1,)\n            The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]]\n            gives the indicator value for the i-th estimator.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "indicator",
                            "docstring": "Return a node indicator matrix where non zero elements indicates that the samples goes through the nodes. The matrix is of CSR format.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "n_nodes_ptr",
                            "docstring": "The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]] gives the indicator value for the i-th estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Build a forest of trees from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Internally, its dtype will be converted\n            to ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csc_matrix``.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "\n        Predict regression target for X.\n\n        The predicted regression target of an input sample is computed as the\n        mean predicted regression targets of the trees in the forest.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,) or (n_samples, n_outputs)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "GradientBoostingClassifier",
            "docstring": "Gradient Boosting for classification.\n\n    GB builds an additive model in a\n    forward stage-wise fashion; it allows for the optimization of\n    arbitrary differentiable loss functions. In each stage ``n_classes_``\n    regression trees are fit on the negative gradient of the\n    binomial or multinomial deviance loss function. Binary classification\n    is a special case where only a single regression tree is induced.\n\n    Read more in the :ref:`User Guide <gradient_boosting>`.\n\n    Parameters\n    ----------\n    loss : {'deviance', 'exponential'}, default='deviance'\n        loss function to be optimized. 'deviance' refers to\n        deviance (= logistic regression) for classification\n        with probabilistic outputs. For loss 'exponential' gradient\n        boosting recovers the AdaBoost algorithm.\n\n    learning_rate : float, default=0.1\n        learning rate shrinks the contribution of each tree by `learning_rate`.\n        There is a trade-off between learning_rate and n_estimators.\n\n    n_estimators : int, default=100\n        The number of boosting stages to perform. Gradient boosting\n        is fairly robust to over-fitting so a large number usually\n        results in better performance.\n\n    subsample : float, default=1.0\n        The fraction of samples to be used for fitting the individual base\n        learners. If smaller than 1.0 this results in Stochastic Gradient\n        Boosting. `subsample` interacts with the parameter `n_estimators`.\n        Choosing `subsample < 1.0` leads to a reduction of variance\n        and an increase in bias.\n\n    criterion : {'friedman_mse', 'mse', 'mae'}, default='friedman_mse'\n        The function to measure the quality of a split. Supported criteria\n        are 'friedman_mse' for the mean squared error with improvement\n        score by Friedman, 'mse' for mean squared error, and 'mae' for\n        the mean absolute error. The default value of 'friedman_mse' is\n        generally the best as it can provide a better approximation in\n        some cases.\n\n        .. versionadded:: 0.18\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_depth : int, default=3\n        maximum depth of the individual regression estimators. The maximum\n        depth limits the number of nodes in the tree. Tune this parameter\n        for best performance; the best value depends on the interaction\n        of the input variables.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    init : estimator or 'zero', default=None\n        An estimator object that is used to compute the initial predictions.\n        ``init`` has to provide :meth:`fit` and :meth:`predict_proba`. If\n        'zero', the initial raw predictions are set to zero. By default, a\n        ``DummyEstimator`` predicting the classes priors is used.\n\n    random_state : int or RandomState, default=None\n        Controls the random seed given to each Tree estimator at each\n        boosting iteration.\n        In addition, it controls the random permutation of the features at\n        each split (see Notes for more details).\n        It also controls the random spliting of the training data to obtain a\n        validation set if `n_iter_no_change` is not None.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    max_features : {'auto', 'sqrt', 'log2'}, int or float, default=None\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If 'auto', then `max_features=sqrt(n_features)`.\n        - If 'sqrt', then `max_features=sqrt(n_features)`.\n        - If 'log2', then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Choosing `max_features < n_features` leads to a reduction of variance\n        and an increase in bias.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    verbose : int, default=0\n        Enable verbose output. If 1 then it prints progress and performance\n        once in a while (the more trees the lower the frequency). If greater\n        than 1 then it prints progress and performance for every tree.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just erase the\n        previous solution. See :term:`the Glossary <warm_start>`.\n\n    presort : deprecated, default='deprecated'\n        This parameter is deprecated and will be removed in v0.24.\n\n        .. deprecated :: 0.22\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if ``n_iter_no_change`` is set to an integer.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=None\n        ``n_iter_no_change`` is used to decide if early stopping will be used\n        to terminate training when validation score is not improving. By\n        default it is set to None to disable early stopping. If set to a\n        number, it will set aside ``validation_fraction`` size of the training\n        data as validation and terminate training when validation score is not\n        improving in all of the previous ``n_iter_no_change`` numbers of\n        iterations. The split is stratified.\n\n        .. versionadded:: 0.20\n\n    tol : float, default=1e-4\n        Tolerance for the early stopping. When the loss is not improving\n        by at least tol for ``n_iter_no_change`` iterations (if set to a\n        number), the training stops.\n\n        .. versionadded:: 0.20\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    n_estimators_ : int\n        The number of estimators as selected by early stopping (if\n        ``n_iter_no_change`` is specified). Otherwise it is set to\n        ``n_estimators``.\n\n        .. versionadded:: 0.20\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    oob_improvement_ : ndarray of shape (n_estimators,)\n        The improvement in loss (= deviance) on the out-of-bag samples\n        relative to the previous iteration.\n        ``oob_improvement_[0]`` is the improvement in\n        loss of the first stage over the ``init`` estimator.\n        Only available if ``subsample < 1.0``\n\n    train_score_ : ndarray of shape (n_estimators,)\n        The i-th score ``train_score_[i]`` is the deviance (= loss) of the\n        model at iteration ``i`` on the in-bag sample.\n        If ``subsample == 1`` this is the deviance on the training data.\n\n    loss_ : LossFunction\n        The concrete ``LossFunction`` object.\n\n    init_ : estimator\n        The estimator that provides the initial predictions.\n        Set via the ``init`` argument or ``loss.init_estimator``.\n\n    estimators_ : ndarray of DecisionTreeRegressor of shape (n_estimators, ``loss_.K``)\n        The collection of fitted sub-estimators. ``loss_.K`` is 1 for binary\n        classification, otherwise n_classes.\n\n    classes_ : ndarray of shape (n_classes,)\n        The classes labels.\n\n    n_features_ : int\n        The number of data features.\n\n    n_classes_ : int\n        The number of classes.\n\n    max_features_ : int\n        The inferred value of max_features.\n\n    Notes\n    -----\n    The features are always randomly permuted at each split. Therefore,\n    the best found split may vary, even with the same training data and\n    ``max_features=n_features``, if the improvement of the criterion is\n    identical for several splits enumerated during the search of the best\n    split. To obtain a deterministic behaviour during fitting,\n    ``random_state`` has to be fixed.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import make_classification\n    >>> from sklearn.ensemble import GradientBoostingClassifier\n    >>> from sklearn.model_selection import train_test_split\n    >>> X, y = make_classification(random_state=0)\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, random_state=0)\n    >>> clf = GradientBoostingClassifier(random_state=0)\n    >>> clf.fit(X_train, y_train)\n    GradientBoostingClassifier(random_state=0)\n    >>> clf.predict(X_test[:2])\n    array([1, 0])\n    >>> clf.score(X_test, y_test)\n    0.88\n\n    See also\n    --------\n    sklearn.ensemble.HistGradientBoostingClassifier,\n    sklearn.tree.DecisionTreeClassifier, RandomForestClassifier\n    AdaBoostClassifier\n\n    References\n    ----------\n    J. Friedman, Greedy Function Approximation: A Gradient Boosting\n    Machine, The Annals of Statistics, Vol. 29, No. 5, 2001.\n\n    J. Friedman, Stochastic Gradient Boosting, 1999\n\n    T. Hastie, R. Tibshirani and J. Friedman.\n    Elements of Statistical Learning Ed. 2, Springer, 2009.\n    ",
            "inputs": [
                {
                    "name": "loss",
                    "docstring": "loss function to be optimized. 'deviance' refers to deviance (= logistic regression) for classification with probabilistic outputs. For loss 'exponential' gradient boosting recovers the AdaBoost algorithm.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "deviance",
                    "options": [
                        "deviance",
                        "exponential",
                        "default=deviance"
                    ]
                },
                {
                    "name": "learning_rate",
                    "docstring": "learning rate shrinks the contribution of each tree by `learning_rate`. There is a trade-off between learning_rate and n_estimators.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.1",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "subsample",
                    "docstring": "The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are 'friedman_mse' for the mean squared error with improvement score by Friedman, 'mse' for mean squared error, and 'mae' for the mean absolute error. The default value of 'friedman_mse' is generally the best as it can provide a better approximation in some cases.  .. versionadded:: 0.18",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "friedman_mse",
                    "options": [
                        "friedman_mse",
                        "mse",
                        "mae",
                        "default=friedman_mse"
                    ]
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_depth",
                    "docstring": "maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "3",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "init",
                    "docstring": "An estimator object that is used to compute the initial predictions. ``init`` has to provide :meth:`fit` and :meth:`predict_proba`. If 'zero', the initial raw predictions are set to zero. By default, a ``DummyEstimator`` predicting the classes priors is used.",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random spliting of the training data to obtain a validation set if `n_iter_no_change` is not None. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If 'auto', then `max_features=sqrt(n_features)`. - If 'sqrt', then `max_features=sqrt(n_features)`. - If 'log2', then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Choosing `max_features < n_features` leads to a reduction of variance and an increase in bias.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2",
                        "int or float",
                        "default=None"
                    ]
                },
                {
                    "name": "verbose",
                    "docstring": "Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "presort",
                    "docstring": "This parameter is deprecated and will be removed in v0.24.  .. deprecated :: 0.22",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "deprecated",
                    "options": null
                },
                {
                    "name": "validation_fraction",
                    "docstring": "The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if ``n_iter_no_change`` is set to an integer.  .. versionadded:: 0.20",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.1",
                    "options": null
                },
                {
                    "name": "n_iter_no_change",
                    "docstring": "``n_iter_no_change`` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to None to disable early stopping. If set to a number, it will set aside ``validation_fraction`` size of the training data as validation and terminate training when validation score is not improving in all of the previous ``n_iter_no_change`` numbers of iterations. The split is stratified.  .. versionadded:: 0.20",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "tol",
                    "docstring": "Tolerance for the early stopping. When the loss is not improving by at least tol for ``n_iter_no_change`` iterations (if set to a number), the training stops.  .. versionadded:: 0.20",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1e-4",
                    "options": null
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "n_estimators_",
                    "docstring": "The number of estimators as selected by early stopping (if ``n_iter_no_change`` is specified). Otherwise it is set to ``n_estimators``.  .. versionadded:: 0.20",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_improvement_",
                    "docstring": "The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. ``oob_improvement_[0]`` is the improvement in loss of the first stage over the ``init`` estimator. Only available if ``subsample < 1.0``",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "train_score_",
                    "docstring": "The i-th score ``train_score_[i]`` is the deviance (= loss) of the model at iteration ``i`` on the in-bag sample. If ``subsample == 1`` this is the deviance on the training data.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "loss_",
                    "docstring": "The concrete ``LossFunction`` object.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "init_",
                    "docstring": "The estimator that provides the initial predictions. Set via the ``init`` argument or ``loss.init_estimator``.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators. ``loss_.K`` is 1 for binary classification, otherwise n_classes.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of data features.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "n_classes_",
                    "docstring": "The number of classes.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "max_features_",
                    "docstring": "The inferred value of max_features.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_initialized",
                    "docstring": "Check that the estimator is initialized, raising an error if not.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_check_params",
                    "docstring": "Check validity of parameters and raise ValueError if not valid. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_clear_state",
                    "docstring": "Clear the state of the gradient boosting model. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_compute_partial_dependence_recursion",
                    "docstring": "Fast partial dependence computation.\n\n        Parameters\n        ----------\n        grid : ndarray of shape (n_samples, n_target_features)\n            The grid points on which the partial dependence should be\n            evaluated.\n        target_features : ndarray of shape (n_target_features,)\n            The set of target features for which the partial dependence\n            should be evaluated.\n\n        Returns\n        -------\n        averaged_predictions : ndarray of shape                 (n_trees_per_iteration, n_samples)\n            The value of the partial dependence function on each grid point.\n        ",
                    "inputs": [
                        {
                            "name": "grid",
                            "docstring": "The grid points on which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "target_features",
                            "docstring": "The set of target features for which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_target_features,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "averaged_predictions",
                            "docstring": "The value of the partial dependence function on each grid point.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_fit_stage",
                    "docstring": "Fit another stage of ``n_classes_`` trees to the boosting model. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_fit_stages",
                    "docstring": "Iteratively fits the stages.\n\n        For each stage it computes the progress (OOB, train score)\n        and delegates to ``_fit_stage``.\n        Returns the number of stages fit; might differ from ``n_estimators``\n        due to early stopping.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_init_state",
                    "docstring": "Initialize model state and allocate model state data structures. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_is_initialized",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_raw_predict",
                    "docstring": "Return the sum of the trees raw predictions (+ init estimator).",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_raw_predict_init",
                    "docstring": "Check input and compute raw predictions of the init estimator.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_resize_state",
                    "docstring": "Add additional ``n_estimators`` entries to all attributes. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_staged_raw_predict",
                    "docstring": "Compute raw predictions of ``X`` for each iteration.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        raw_predictions : generator of ndarray of shape (n_samples, k)\n            The raw predictions of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n            Regression and binary classification are special cases with\n            ``k == 1``, otherwise ``k==n_classes``.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "raw_predictions",
                            "docstring": "The raw predictions of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`. Regression and binary classification are special cases with ``k == 1``, otherwise ``k==n_classes``.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "Apply trees in the ensemble to X, return leaf indices.\n\n        .. versionadded:: 0.17\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will\n            be converted to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : array-like of shape (n_samples, n_estimators, n_classes)\n            For each datapoint x in X and for each tree in the ensemble,\n            return the index of the leaf x ends up in each estimator.\n            In the case of binary classification n_classes is 1.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the ensemble, return the index of the leaf x ends up in each estimator. In the case of binary classification n_classes is 1.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_function",
                    "docstring": "Compute the decision function of ``X``.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        score : ndarray of shape (n_samples, n_classes) or (n_samples,)\n            The decision function of the input samples, which corresponds to\n            the raw values predicted from the trees of the ensemble . The\n            order of the classes corresponds to that in the attribute\n            :term:`classes_`. Regression and binary classification produce an\n            array of shape [n_samples].\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "The decision function of the input samples, which corresponds to the raw values predicted from the trees of the ensemble . The order of the classes corresponds to that in the attribute :term:`classes_`. Regression and binary classification produce an array of shape [n_samples].",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "Fit the gradient boosting model.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        y : array-like of shape (n_samples,)\n            Target values (strings or integers in classification, real numbers\n            in regression)\n            For classification, labels must correspond to classes.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        monitor : callable, default=None\n            The monitor is called after each iteration with the current\n            iteration, a reference to the estimator and the local variables of\n            ``_fit_stages`` as keyword arguments ``callable(i, self,\n            locals())``. If the callable returns ``True`` the fitting procedure\n            is stopped. The monitor can be used for various things such as\n            computing held-out estimates, early stopping, model introspect, and\n            snapshoting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "monitor",
                            "docstring": "The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of ``_fit_stages`` as keyword arguments ``callable(i, self, locals())``. If the callable returns ``True`` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshoting.",
                            "param_type": [
                                "callable",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict class for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_log_proba",
                    "docstring": "Predict class log-probabilities for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Raises\n        ------\n        AttributeError\n            If the ``loss`` does not support probabilities.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class log-probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class log-probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "Predict class probabilities for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Raises\n        ------\n        AttributeError\n            If the ``loss`` does not support probabilities.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes)\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "staged_decision_function",
                    "docstring": "Compute decision function of ``X`` for each iteration.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        score : generator of ndarray of shape (n_samples, k)\n            The decision function of the input samples, which corresponds to\n            the raw values predicted from the trees of the ensemble . The\n            classes corresponds to that in the attribute :term:`classes_`.\n            Regression and binary classification are special cases with\n            ``k == 1``, otherwise ``k==n_classes``.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "The decision function of the input samples, which corresponds to the raw values predicted from the trees of the ensemble . The classes corresponds to that in the attribute :term:`classes_`. Regression and binary classification are special cases with ``k == 1``, otherwise ``k==n_classes``.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "staged_predict",
                    "docstring": "Predict class at each stage for X.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : generator of ndarray of shape (n_samples,)\n            The predicted value of the input samples.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted value of the input samples.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "staged_predict_proba",
                    "docstring": "Predict class probabilities at each stage for X.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : generator of ndarray of shape (n_samples,)\n            The predicted value of the input samples.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted value of the input samples.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "GradientBoostingRegressor",
            "docstring": "Gradient Boosting for regression.\n\n    GB builds an additive model in a forward stage-wise fashion;\n    it allows for the optimization of arbitrary differentiable loss functions.\n    In each stage a regression tree is fit on the negative gradient of the\n    given loss function.\n\n    Read more in the :ref:`User Guide <gradient_boosting>`.\n\n    Parameters\n    ----------\n    loss : {'ls', 'lad', 'huber', 'quantile'}, default='ls'\n        loss function to be optimized. 'ls' refers to least squares\n        regression. 'lad' (least absolute deviation) is a highly robust\n        loss function solely based on order information of the input\n        variables. 'huber' is a combination of the two. 'quantile'\n        allows quantile regression (use `alpha` to specify the quantile).\n\n    learning_rate : float, default=0.1\n        learning rate shrinks the contribution of each tree by `learning_rate`.\n        There is a trade-off between learning_rate and n_estimators.\n\n    n_estimators : int, default=100\n        The number of boosting stages to perform. Gradient boosting\n        is fairly robust to over-fitting so a large number usually\n        results in better performance.\n\n    subsample : float, default=1.0\n        The fraction of samples to be used for fitting the individual base\n        learners. If smaller than 1.0 this results in Stochastic Gradient\n        Boosting. `subsample` interacts with the parameter `n_estimators`.\n        Choosing `subsample < 1.0` leads to a reduction of variance\n        and an increase in bias.\n\n    criterion : {'friedman_mse', 'mse', 'mae'}, default='friedman_mse'\n        The function to measure the quality of a split. Supported criteria\n        are \"friedman_mse\" for the mean squared error with improvement\n        score by Friedman, \"mse\" for mean squared error, and \"mae\" for\n        the mean absolute error. The default value of \"friedman_mse\" is\n        generally the best as it can provide a better approximation in\n        some cases.\n\n        .. versionadded:: 0.18\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_depth : int, default=3\n        maximum depth of the individual regression estimators. The maximum\n        depth limits the number of nodes in the tree. Tune this parameter\n        for best performance; the best value depends on the interaction\n        of the input variables.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    init : estimator or 'zero', default=None\n        An estimator object that is used to compute the initial predictions.\n        ``init`` has to provide :term:`fit` and :term:`predict`. If 'zero', the\n        initial raw predictions are set to zero. By default a\n        ``DummyEstimator`` is used, predicting either the average target value\n        (for loss='ls'), or a quantile for the other losses.\n\n    random_state : int or RandomState, default=None\n        Controls the random seed given to each Tree estimator at each\n        boosting iteration.\n        In addition, it controls the random permutation of the features at\n        each split (see Notes for more details).\n        It also controls the random spliting of the training data to obtain a\n        validation set if `n_iter_no_change` is not None.\n        Pass an int for reproducible output across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    max_features : {'auto', 'sqrt', 'log2'}, int or float, default=None\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If \"auto\", then `max_features=n_features`.\n        - If \"sqrt\", then `max_features=sqrt(n_features)`.\n        - If \"log2\", then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Choosing `max_features < n_features` leads to a reduction of variance\n        and an increase in bias.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    alpha : float, default=0.9\n        The alpha-quantile of the huber loss function and the quantile\n        loss function. Only if ``loss='huber'`` or ``loss='quantile'``.\n\n    verbose : int, default=0\n        Enable verbose output. If 1 then it prints progress and performance\n        once in a while (the more trees the lower the frequency). If greater\n        than 1 then it prints progress and performance for every tree.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just erase the\n        previous solution. See :term:`the Glossary <warm_start>`.\n\n    presort : deprecated, default='deprecated'\n        This parameter is deprecated and will be removed in v0.24.\n\n        .. deprecated :: 0.22\n\n    validation_fraction : float, default=0.1\n        The proportion of training data to set aside as validation set for\n        early stopping. Must be between 0 and 1.\n        Only used if ``n_iter_no_change`` is set to an integer.\n\n        .. versionadded:: 0.20\n\n    n_iter_no_change : int, default=None\n        ``n_iter_no_change`` is used to decide if early stopping will be used\n        to terminate training when validation score is not improving. By\n        default it is set to None to disable early stopping. If set to a\n        number, it will set aside ``validation_fraction`` size of the training\n        data as validation and terminate training when validation score is not\n        improving in all of the previous ``n_iter_no_change`` numbers of\n        iterations.\n\n        .. versionadded:: 0.20\n\n    tol : float, default=1e-4\n        Tolerance for the early stopping. When the loss is not improving\n        by at least tol for ``n_iter_no_change`` iterations (if set to a\n        number), the training stops.\n\n        .. versionadded:: 0.20\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    oob_improvement_ : ndarray of shape (n_estimators,)\n        The improvement in loss (= deviance) on the out-of-bag samples\n        relative to the previous iteration.\n        ``oob_improvement_[0]`` is the improvement in\n        loss of the first stage over the ``init`` estimator.\n        Only available if ``subsample < 1.0``\n\n    train_score_ : ndarray of shape (n_estimators,)\n        The i-th score ``train_score_[i]`` is the deviance (= loss) of the\n        model at iteration ``i`` on the in-bag sample.\n        If ``subsample == 1`` this is the deviance on the training data.\n\n    loss_ : LossFunction\n        The concrete ``LossFunction`` object.\n\n    init_ : estimator\n        The estimator that provides the initial predictions.\n        Set via the ``init`` argument or ``loss.init_estimator``.\n\n    estimators_ : ndarray of DecisionTreeRegressor of shape (n_estimators, 1)\n        The collection of fitted sub-estimators.\n\n    n_features_ : int\n        The number of data features.\n\n    max_features_ : int\n        The inferred value of max_features.\n\n    Notes\n    -----\n    The features are always randomly permuted at each split. Therefore,\n    the best found split may vary, even with the same training data and\n    ``max_features=n_features``, if the improvement of the criterion is\n    identical for several splits enumerated during the search of the best\n    split. To obtain a deterministic behaviour during fitting,\n    ``random_state`` has to be fixed.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import make_regression\n    >>> from sklearn.ensemble import GradientBoostingRegressor\n    >>> from sklearn.model_selection import train_test_split\n    >>> X, y = make_regression(random_state=0)\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, random_state=0)\n    >>> reg = GradientBoostingRegressor(random_state=0)\n    >>> reg.fit(X_train, y_train)\n    GradientBoostingRegressor(random_state=0)\n    >>> reg.predict(X_test[1:2])\n    array([-61...])\n    >>> reg.score(X_test, y_test)\n    0.4...\n\n    See also\n    --------\n    sklearn.ensemble.HistGradientBoostingRegressor,\n    sklearn.tree.DecisionTreeRegressor, RandomForestRegressor\n\n    References\n    ----------\n    J. Friedman, Greedy Function Approximation: A Gradient Boosting\n    Machine, The Annals of Statistics, Vol. 29, No. 5, 2001.\n\n    J. Friedman, Stochastic Gradient Boosting, 1999\n\n    T. Hastie, R. Tibshirani and J. Friedman.\n    Elements of Statistical Learning Ed. 2, Springer, 2009.\n    ",
            "inputs": [
                {
                    "name": "loss",
                    "docstring": "loss function to be optimized. 'ls' refers to least squares regression. 'lad' (least absolute deviation) is a highly robust loss function solely based on order information of the input variables. 'huber' is a combination of the two. 'quantile' allows quantile regression (use `alpha` to specify the quantile).",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "ls",
                    "options": [
                        "ls",
                        "lad",
                        "huber",
                        "quantile",
                        "default=ls"
                    ]
                },
                {
                    "name": "learning_rate",
                    "docstring": "learning rate shrinks the contribution of each tree by `learning_rate`. There is a trade-off between learning_rate and n_estimators.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.1",
                    "options": null
                },
                {
                    "name": "n_estimators",
                    "docstring": "The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "subsample",
                    "docstring": "The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are \"friedman_mse\" for the mean squared error with improvement score by Friedman, \"mse\" for mean squared error, and \"mae\" for the mean absolute error. The default value of \"friedman_mse\" is generally the best as it can provide a better approximation in some cases.  .. versionadded:: 0.18",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "friedman_mse",
                    "options": [
                        "friedman_mse",
                        "mse",
                        "mae",
                        "default=friedman_mse"
                    ]
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_depth",
                    "docstring": "maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "3",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "init",
                    "docstring": "An estimator object that is used to compute the initial predictions. ``init`` has to provide :term:`fit` and :term:`predict`. If 'zero', the initial raw predictions are set to zero. By default a ``DummyEstimator`` is used, predicting either the average target value (for loss='ls'), or a quantile for the other losses.",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random spliting of the training data to obtain a validation set if `n_iter_no_change` is not None. Pass an int for reproducible output across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If \"auto\", then `max_features=n_features`. - If \"sqrt\", then `max_features=sqrt(n_features)`. - If \"log2\", then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Choosing `max_features < n_features` leads to a reduction of variance and an increase in bias.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2",
                        "int or float",
                        "default=None"
                    ]
                },
                {
                    "name": "alpha",
                    "docstring": "The alpha-quantile of the huber loss function and the quantile loss function. Only if ``loss='huber'`` or ``loss='quantile'``.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.9",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "presort",
                    "docstring": "This parameter is deprecated and will be removed in v0.24.  .. deprecated :: 0.22",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "deprecated",
                    "options": null
                },
                {
                    "name": "validation_fraction",
                    "docstring": "The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if ``n_iter_no_change`` is set to an integer.  .. versionadded:: 0.20",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.1",
                    "options": null
                },
                {
                    "name": "n_iter_no_change",
                    "docstring": "``n_iter_no_change`` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to None to disable early stopping. If set to a number, it will set aside ``validation_fraction`` size of the training data as validation and terminate training when validation score is not improving in all of the previous ``n_iter_no_change`` numbers of iterations.  .. versionadded:: 0.20",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "tol",
                    "docstring": "Tolerance for the early stopping. When the loss is not improving by at least tol for ``n_iter_no_change`` iterations (if set to a number), the training stops.  .. versionadded:: 0.20",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1e-4",
                    "options": null
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_improvement_",
                    "docstring": "The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. ``oob_improvement_[0]`` is the improvement in loss of the first stage over the ``init`` estimator. Only available if ``subsample < 1.0``",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "train_score_",
                    "docstring": "The i-th score ``train_score_[i]`` is the deviance (= loss) of the model at iteration ``i`` on the in-bag sample. If ``subsample == 1`` this is the deviance on the training data.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "loss_",
                    "docstring": "The concrete ``LossFunction`` object.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "init_",
                    "docstring": "The estimator that provides the initial predictions. Set via the ``init`` argument or ``loss.init_estimator``.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of data features.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "max_features_",
                    "docstring": "The inferred value of max_features.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_initialized",
                    "docstring": "Check that the estimator is initialized, raising an error if not.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_check_params",
                    "docstring": "Check validity of parameters and raise ValueError if not valid. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_clear_state",
                    "docstring": "Clear the state of the gradient boosting model. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_compute_partial_dependence_recursion",
                    "docstring": "Fast partial dependence computation.\n\n        Parameters\n        ----------\n        grid : ndarray of shape (n_samples, n_target_features)\n            The grid points on which the partial dependence should be\n            evaluated.\n        target_features : ndarray of shape (n_target_features,)\n            The set of target features for which the partial dependence\n            should be evaluated.\n\n        Returns\n        -------\n        averaged_predictions : ndarray of shape                 (n_trees_per_iteration, n_samples)\n            The value of the partial dependence function on each grid point.\n        ",
                    "inputs": [
                        {
                            "name": "grid",
                            "docstring": "The grid points on which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "target_features",
                            "docstring": "The set of target features for which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_target_features,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "averaged_predictions",
                            "docstring": "The value of the partial dependence function on each grid point.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_fit_stage",
                    "docstring": "Fit another stage of ``n_classes_`` trees to the boosting model. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_fit_stages",
                    "docstring": "Iteratively fits the stages.\n\n        For each stage it computes the progress (OOB, train score)\n        and delegates to ``_fit_stage``.\n        Returns the number of stages fit; might differ from ``n_estimators``\n        due to early stopping.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_init_state",
                    "docstring": "Initialize model state and allocate model state data structures. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_is_initialized",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_raw_predict",
                    "docstring": "Return the sum of the trees raw predictions (+ init estimator).",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_raw_predict_init",
                    "docstring": "Check input and compute raw predictions of the init estimator.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_resize_state",
                    "docstring": "Add additional ``n_estimators`` entries to all attributes. ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_staged_raw_predict",
                    "docstring": "Compute raw predictions of ``X`` for each iteration.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        raw_predictions : generator of ndarray of shape (n_samples, k)\n            The raw predictions of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n            Regression and binary classification are special cases with\n            ``k == 1``, otherwise ``k==n_classes``.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "raw_predictions",
                            "docstring": "The raw predictions of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`. Regression and binary classification are special cases with ``k == 1``, otherwise ``k==n_classes``.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "Apply trees in the ensemble to X, return leaf indices.\n\n        .. versionadded:: 0.17\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will\n            be converted to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : array-like of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the ensemble,\n            return the index of the leaf x ends up in each estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the ensemble, return the index of the leaf x ends up in each estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "Fit the gradient boosting model.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        y : array-like of shape (n_samples,)\n            Target values (strings or integers in classification, real numbers\n            in regression)\n            For classification, labels must correspond to classes.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        monitor : callable, default=None\n            The monitor is called after each iteration with the current\n            iteration, a reference to the estimator and the local variables of\n            ``_fit_stages`` as keyword arguments ``callable(i, self,\n            locals())``. If the callable returns ``True`` the fitting procedure\n            is stopped. The monitor can be used for various things such as\n            computing held-out estimates, early stopping, model introspect, and\n            snapshoting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "monitor",
                            "docstring": "The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of ``_fit_stages`` as keyword arguments ``callable(i, self, locals())``. If the callable returns ``True`` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshoting.",
                            "param_type": [
                                "callable",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "Predict regression target for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "staged_predict",
                    "docstring": "Predict regression target at each stage for X.\n\n        This method allows monitoring (i.e. determine error on testing set)\n        after each stage.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : generator of ndarray of shape (n_samples,)\n            The predicted value of the input samples.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted value of the input samples.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "IsolationForest",
            "docstring": "\n    Isolation Forest Algorithm.\n\n    Return the anomaly score of each sample using the IsolationForest algorithm\n\n    The IsolationForest 'isolates' observations by randomly selecting a feature\n    and then randomly selecting a split value between the maximum and minimum\n    values of the selected feature.\n\n    Since recursive partitioning can be represented by a tree structure, the\n    number of splittings required to isolate a sample is equivalent to the path\n    length from the root node to the terminating node.\n\n    This path length, averaged over a forest of such random trees, is a\n    measure of normality and our decision function.\n\n    Random partitioning produces noticeably shorter paths for anomalies.\n    Hence, when a forest of random trees collectively produce shorter path\n    lengths for particular samples, they are highly likely to be anomalies.\n\n    Read more in the :ref:`User Guide <isolation_forest>`.\n\n    .. versionadded:: 0.18\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        The number of base estimators in the ensemble.\n\n    max_samples : \"auto\", int or float, default=\"auto\"\n        The number of samples to draw from X to train each base estimator.\n            - If int, then draw `max_samples` samples.\n            - If float, then draw `max_samples * X.shape[0]` samples.\n            - If \"auto\", then `max_samples=min(256, n_samples)`.\n\n        If max_samples is larger than the number of samples provided,\n        all samples will be used for all trees (no sampling).\n\n    contamination : 'auto' or float, default='auto'\n        The amount of contamination of the data set, i.e. the proportion\n        of outliers in the data set. Used when fitting to define the threshold\n        on the scores of the samples.\n\n            - If 'auto', the threshold is determined as in the\n              original paper.\n            - If float, the contamination should be in the range [0, 0.5].\n\n        .. versionchanged:: 0.22\n           The default value of ``contamination`` changed from 0.1\n           to ``'auto'``.\n\n    max_features : int or float, default=1.0\n        The number of features to draw from X to train each base estimator.\n\n            - If int, then draw `max_features` features.\n            - If float, then draw `max_features * X.shape[1]` features.\n\n    bootstrap : bool, default=False\n        If True, individual trees are fit on random subsets of the training\n        data sampled with replacement. If False, sampling without replacement\n        is performed.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for both :meth:`fit` and\n        :meth:`predict`. ``None`` means 1 unless in a\n        :obj:`joblib.parallel_backend` context. ``-1`` means using all\n        processors. See :term:`Glossary <n_jobs>` for more details.\n\n    behaviour : str, default='deprecated'\n        This parameter has no effect, is deprecated, and will be removed.\n\n        .. versionadded:: 0.20\n           ``behaviour`` is added in 0.20 for back-compatibility purpose.\n\n        .. deprecated:: 0.20\n           ``behaviour='old'`` is deprecated in 0.20 and will not be possible\n           in 0.22.\n\n        .. deprecated:: 0.22\n           ``behaviour`` parameter is deprecated in 0.22 and removed in\n           0.24.\n\n    random_state : int or RandomState, default=None\n        Controls the pseudo-randomness of the selection of the feature\n        and split values for each branching step and each tree in the forest.\n\n        Pass an int for reproducible results across multiple function calls.\n        See :term:`Glossary <random_state>`.\n\n    verbose : int, default=0\n        Controls the verbosity of the tree building process.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n        .. versionadded:: 0.21\n\n    Attributes\n    ----------\n    estimators_ : list of DecisionTreeClassifier\n        The collection of fitted sub-estimators.\n\n    estimators_samples_ : list of arrays\n        The subset of drawn samples (i.e., the in-bag samples) for each base\n        estimator.\n\n    max_samples_ : int\n        The actual number of samples.\n\n    offset_ : float\n        Offset used to define the decision function from the raw scores. We\n        have the relation: ``decision_function = score_samples - offset_``.\n        ``offset_`` is defined as follows. When the contamination parameter is\n        set to \"auto\", the offset is equal to -0.5 as the scores of inliers are\n        close to 0 and the scores of outliers are close to -1. When a\n        contamination parameter different than \"auto\" is provided, the offset\n        is defined in such a way we obtain the expected number of outliers\n        (samples with decision function < 0) in training.\n\n        .. versionadded:: 0.20\n\n    estimators_features_ : list of arrays\n        The subset of drawn features for each base estimator.\n\n    Notes\n    -----\n    The implementation is based on an ensemble of ExtraTreeRegressor. The\n    maximum depth of each tree is set to ``ceil(log_2(n))`` where\n    :math:`n` is the number of samples used to build the tree\n    (see (Liu et al., 2008) for more details).\n\n    References\n    ----------\n    .. [1] Liu, Fei Tony, Ting, Kai Ming and Zhou, Zhi-Hua. \"Isolation forest.\"\n           Data Mining, 2008. ICDM'08. Eighth IEEE International Conference on.\n    .. [2] Liu, Fei Tony, Ting, Kai Ming and Zhou, Zhi-Hua. \"Isolation-based\n           anomaly detection.\" ACM Transactions on Knowledge Discovery from\n           Data (TKDD) 6.1 (2012): 3.\n\n    See Also\n    ----------\n    sklearn.covariance.EllipticEnvelope : An object for detecting outliers in a\n        Gaussian distributed dataset.\n    sklearn.svm.OneClassSVM : Unsupervised Outlier Detection.\n        Estimate the support of a high-dimensional distribution.\n        The implementation is based on libsvm.\n    sklearn.neighbors.LocalOutlierFactor : Unsupervised Outlier Detection\n        using Local Outlier Factor (LOF).\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import IsolationForest\n    >>> X = [[-1.1], [0.3], [0.5], [100]]\n    >>> clf = IsolationForest(random_state=0).fit(X)\n    >>> clf.predict([[0.1], [0], [90]])\n    array([ 1,  1, -1])\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "The number of base estimators in the ensemble.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "The number of samples to draw from X to train each base estimator.     - If int, then draw `max_samples` samples.     - If float, then draw `max_samples * X.shape[0]` samples.     - If \"auto\", then `max_samples=min(256, n_samples)`.  If max_samples is larger than the number of samples provided, all samples will be used for all trees (no sampling).",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"auto\"",
                    "options": null
                },
                {
                    "name": "contamination",
                    "docstring": "The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Used when fitting to define the threshold on the scores of the samples.      - If 'auto', the threshold is determined as in the       original paper.     - If float, the contamination should be in the range [0, 0.5].  .. versionchanged:: 0.22    The default value of ``contamination`` changed from 0.1    to ``'auto'``.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "auto",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to draw from X to train each base estimator.      - If int, then draw `max_features` features.     - If float, then draw `max_features * X.shape[1]` features.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1.0",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "If True, individual trees are fit on random subsets of the training data sampled with replacement. If False, sampling without replacement is performed.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for both :meth:`fit` and :meth:`predict`. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "behaviour",
                    "docstring": "This parameter has no effect, is deprecated, and will be removed.  .. versionadded:: 0.20    ``behaviour`` is added in 0.20 for back-compatibility purpose.  .. deprecated:: 0.20    ``behaviour='old'`` is deprecated in 0.20 and will not be possible    in 0.22.  .. deprecated:: 0.22    ``behaviour`` parameter is deprecated in 0.22 and removed in    0.24.",
                    "param_type": [
                        "str"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "deprecated",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the pseudo-randomness of the selection of the feature and split values for each branching step and each tree in the forest.  Pass an int for reproducible results across multiple function calls. See :term:`Glossary <random_state>`.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity of the tree building process.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.  .. versionadded:: 0.21",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_samples_",
                    "docstring": "The subset of drawn samples (i.e., the in-bag samples) for each base estimator.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "max_samples_",
                    "docstring": "The actual number of samples.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "offset_",
                    "docstring": "Offset used to define the decision function from the raw scores. We have the relation: ``decision_function = score_samples - offset_``. ``offset_`` is defined as follows. When the contamination parameter is set to \"auto\", the offset is equal to -0.5 as the scores of inliers are close to 0 and the scores of outliers are close to -1. When a contamination parameter different than \"auto\" is provided, the offset is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.  .. versionadded:: 0.20",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_features_",
                    "docstring": "The subset of drawn features for each base estimator.",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_compute_chunked_score_samples",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_compute_score_samples",
                    "docstring": "\n        Compute the score of each samples in X going through the extra trees.\n\n        Parameters\n        ----------\n        X : array-like or sparse matrix\n            Data matrix.\n\n        subsample_features : bool\n            Whether features should be subsampled.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Data matrix.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "subsample_features",
                            "docstring": "Whether features should be subsampled.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_fit",
                    "docstring": "Build a Bagging ensemble of estimators from the training\n           set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Sparse matrices are accepted only if\n            they are supported by the base estimator.\n\n        y : array-like of shape (n_samples,)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        max_samples : int or float, default=None\n            Argument to use instead of self.max_samples.\n\n        max_depth : int, default=None\n            Override value used when constructing base estimator. Only\n            supported if the base estimator has a max_depth parameter.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if the base estimator supports\n            sample weighting.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "max_samples",
                            "docstring": "Argument to use instead of self.max_samples.",
                            "param_type": [
                                "int",
                                "float",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "max_depth",
                            "docstring": "Override value used when constructing base estimator. Only supported if the base estimator has a max_depth parameter.",
                            "param_type": [
                                "int",
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_estimators_indices",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_parallel_args",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "decision_function",
                    "docstring": "\n        Average anomaly score of X of the base classifiers.\n\n        The anomaly score of an input sample is computed as\n        the mean anomaly score of the trees in the forest.\n\n        The measure of normality of an observation given a tree is the depth\n        of the leaf containing this observation, which is equivalent to\n        the number of splittings required to isolate this point. In case of\n        several observations n_left in the leaf, the average path length of\n        a n_left samples isolation tree is added.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        scores : ndarray of shape (n_samples,)\n            The anomaly score of the input samples.\n            The lower, the more abnormal. Negative scores represent outliers,\n            positive scores represent inliers.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "scores",
                            "docstring": "The anomaly score of the input samples. The lower, the more abnormal. Negative scores represent outliers, positive scores represent inliers.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Fit estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Use ``dtype=np.float32`` for maximum\n            efficiency. Sparse matrices are also supported, use sparse\n            ``csc_matrix`` for maximum efficiency.\n\n        y : Ignored\n            Not used, present for API consistency by convention.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n\n        Returns\n        -------\n        self : object\n            Fitted estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Use ``dtype=np.float32`` for maximum efficiency. Sparse matrices are also supported, use sparse ``csc_matrix`` for maximum efficiency.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Not used, present for API consistency by convention.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_predict",
                    "docstring": "Perform fit on X and returns labels for X.\n\n        Returns -1 for outliers and 1 for inliers.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape             (n_samples, n_features)\n\n        y : Ignored\n            Not used, present for API consistency by convention.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            1 for inliers, -1 for outliers.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape             (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Not used, present for API consistency by convention.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "1 for inliers, -1 for outliers.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "\n        Predict if a particular sample is an outlier or not.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, it will be converted to\n            ``dtype=np.float32`` and if a sparse matrix is provided\n            to a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        is_inlier : ndarray of shape (n_samples,)\n            For each observation, tells whether or not (+1 or -1) it should\n            be considered as an inlier according to the fitted model.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, it will be converted to ``dtype=np.float32`` and if a sparse matrix is provided to a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "is_inlier",
                            "docstring": "For each observation, tells whether or not (+1 or -1) it should be considered as an inlier according to the fitted model.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score_samples",
                    "docstring": "\n        Opposite of the anomaly score defined in the original paper.\n\n        The anomaly score of an input sample is computed as\n        the mean anomaly score of the trees in the forest.\n\n        The measure of normality of an observation given a tree is the depth\n        of the leaf containing this observation, which is equivalent to\n        the number of splittings required to isolate this point. In case of\n        several observations n_left in the leaf, the average path length of\n        a n_left samples isolation tree is added.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n\n        Returns\n        -------\n        scores : ndarray of shape (n_samples,)\n            The anomaly score of the input samples.\n            The lower, the more abnormal.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "scores",
                            "docstring": "The anomaly score of the input samples. The lower, the more abnormal.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "RandomForestClassifier",
            "docstring": "\n    A random forest classifier.\n\n    A random forest is a meta estimator that fits a number of decision tree\n    classifiers on various sub-samples of the dataset and uses averaging to\n    improve the predictive accuracy and control over-fitting.\n    The sub-sample size is controlled with the `max_samples` parameter if\n    `bootstrap=True` (default), otherwise the whole dataset is used to build\n    each tree.\n\n    Read more in the :ref:`User Guide <forest>`.\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        The number of trees in the forest.\n\n        .. versionchanged:: 0.22\n           The default value of ``n_estimators`` changed from 10 to 100\n           in 0.22.\n\n    criterion : {\"gini\", \"entropy\"}, default=\"gini\"\n        The function to measure the quality of a split. Supported criteria are\n        \"gini\" for the Gini impurity and \"entropy\" for the information gain.\n        Note: this parameter is tree-specific.\n\n    max_depth : int, default=None\n        The maximum depth of the tree. If None, then nodes are expanded until\n        all leaves are pure or until all leaves contain less than\n        min_samples_split samples.\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_features : {\"auto\", \"sqrt\", \"log2\"}, int or float, default=\"auto\"\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If \"auto\", then `max_features=sqrt(n_features)`.\n        - If \"sqrt\", then `max_features=sqrt(n_features)` (same as \"auto\").\n        - If \"log2\", then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n\n    bootstrap : bool, default=True\n        Whether bootstrap samples are used when building trees. If False, the\n        whole dataset is used to build each tree.\n\n    oob_score : bool, default=False\n        Whether to use out-of-bag samples to estimate\n        the generalization accuracy.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`,\n        :meth:`decision_path` and :meth:`apply` are all parallelized over the\n        trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors. See :term:`Glossary\n        <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls both the randomness of the bootstrapping of the samples used\n        when building trees (if ``bootstrap=True``) and the sampling of the\n        features to consider when looking for the best split at each node\n        (if ``max_features < n_features``).\n        See :term:`Glossary <random_state>` for details.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n    class_weight : {\"balanced\", \"balanced_subsample\"}, dict or list of dicts,             default=None\n        Weights associated with classes in the form ``{class_label: weight}``.\n        If not given, all classes are supposed to have weight one. For\n        multi-output problems, a list of dicts can be provided in the same\n        order as the columns of y.\n\n        Note that for multioutput (including multilabel) weights should be\n        defined for each class of every column in its own dict. For example,\n        for four-class multilabel classification weights should be\n        [{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}] instead of\n        [{1:1}, {2:5}, {3:1}, {4:1}].\n\n        The \"balanced\" mode uses the values of y to automatically adjust\n        weights inversely proportional to class frequencies in the input data\n        as ``n_samples / (n_classes * np.bincount(y))``\n\n        The \"balanced_subsample\" mode is the same as \"balanced\" except that\n        weights are computed based on the bootstrap sample for every tree\n        grown.\n\n        For multi-output, the weights of each column of y will be multiplied.\n\n        Note that these weights will be multiplied with sample_weight (passed\n        through the fit method) if sample_weight is specified.\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    max_samples : int or float, default=None\n        If bootstrap is True, the number of samples to draw from X\n        to train each base estimator.\n\n        - If None (default), then draw `X.shape[0]` samples.\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples. Thus,\n          `max_samples` should be in the interval `(0, 1)`.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    base_estimator_ : DecisionTreeClassifier\n        The child estimator template used to create the collection of fitted\n        sub-estimators.\n\n    estimators_ : list of DecisionTreeClassifier\n        The collection of fitted sub-estimators.\n\n    classes_ : ndarray of shape (n_classes,) or a list of such arrays\n        The classes labels (single output problem), or a list of arrays of\n        class labels (multi-output problem).\n\n    n_classes_ : int or list\n        The number of classes (single output problem), or a list containing the\n        number of classes for each output (multi-output problem).\n\n    n_features_ : int\n        The number of features when ``fit`` is performed.\n\n    n_outputs_ : int\n        The number of outputs when ``fit`` is performed.\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_decision_function_ : ndarray of shape (n_samples, n_classes)\n        Decision function computed with out-of-bag estimate on the training\n        set. If n_estimators is small it might be possible that a data point\n        was never left out during the bootstrap. In this case,\n        `oob_decision_function_` might contain NaN. This attribute exists\n        only when ``oob_score`` is True.\n\n    See Also\n    --------\n    DecisionTreeClassifier, ExtraTreesClassifier\n\n    Notes\n    -----\n    The default values for the parameters controlling the size of the trees\n    (e.g. ``max_depth``, ``min_samples_leaf``, etc.) lead to fully grown and\n    unpruned trees which can potentially be very large on some data sets. To\n    reduce memory consumption, the complexity and size of the trees should be\n    controlled by setting those parameter values.\n\n    The features are always randomly permuted at each split. Therefore,\n    the best found split may vary, even with the same training data,\n    ``max_features=n_features`` and ``bootstrap=False``, if the improvement\n    of the criterion is identical for several splits enumerated during the\n    search of the best split. To obtain a deterministic behaviour during\n    fitting, ``random_state`` has to be fixed.\n\n    References\n    ----------\n    .. [1] L. Breiman, \"Random Forests\", Machine Learning, 45(1), 5-32, 2001.\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import RandomForestClassifier\n    >>> from sklearn.datasets import make_classification\n    >>> X, y = make_classification(n_samples=1000, n_features=4,\n    ...                            n_informative=2, n_redundant=0,\n    ...                            random_state=0, shuffle=False)\n    >>> clf = RandomForestClassifier(max_depth=2, random_state=0)\n    >>> clf.fit(X, y)\n    RandomForestClassifier(...)\n    >>> print(clf.predict([[0, 0, 0, 0]]))\n    [1]\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "The number of trees in the forest.  .. versionchanged:: 0.22    The default value of ``n_estimators`` changed from 10 to 100    in 0.22.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are \"gini\" for the Gini impurity and \"entropy\" for the information gain. Note: this parameter is tree-specific.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"gini\"",
                    "options": [
                        "gini",
                        "entropy",
                        "default=gini"
                    ]
                },
                {
                    "name": "max_depth",
                    "docstring": "The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If \"auto\", then `max_features=sqrt(n_features)`. - If \"sqrt\", then `max_features=sqrt(n_features)` (same as \"auto\"). - If \"log2\", then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"auto\"",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2",
                        "int or float",
                        "default=auto"
                    ]
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether bootstrap samples are used when building trees. If False, the whole dataset is used to build each tree.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "Whether to use out-of-bag samples to estimate the generalization accuracy.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`, :meth:`decision_path` and :meth:`apply` are all parallelized over the trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls both the randomness of the bootstrapping of the samples used when building trees (if ``bootstrap=True``) and the sampling of the features to consider when looking for the best split at each node (if ``max_features < n_features``). See :term:`Glossary <random_state>` for details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "class_weight",
                    "docstring": "Weights associated with classes in the form ``{class_label: weight}``. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.  Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be [{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}] instead of [{1:1}, {2:5}, {3:1}, {4:1}].  The \"balanced\" mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as ``n_samples / (n_classes * np.bincount(y))``  The \"balanced_subsample\" mode is the same as \"balanced\" except that weights are computed based on the bootstrap sample for every tree grown.  For multi-output, the weights of each column of y will be multiplied.  Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "dict",
                        "list",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": [
                        "balanced",
                        "balanced_subsample",
                        "dict or list of dicts",
                        "default=None"
                    ]
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "If bootstrap is True, the number of samples to draw from X to train each base estimator.  - If None (default), then draw `X.shape[0]` samples. - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples. Thus,   `max_samples` should be in the interval `(0, 1)`.  .. versionadded:: 0.22",
                    "param_type": [
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The child estimator template used to create the collection of fitted sub-estimators.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).",
                    "param_type": [
                        "array",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "n_classes_",
                    "docstring": "The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).",
                    "param_type": [
                        "int",
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "n_outputs_",
                    "docstring": "The number of outputs when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_decision_function_",
                    "docstring": "Decision function computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob_decision_function_` might contain NaN. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "\n        Compute out-of-bag score.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_X_predict",
                    "docstring": "\n        Validate X whenever one tries to predict, apply, predict_proba.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y_class_weight",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "\n        Apply trees in the forest to X, return leaf indices.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : ndarray of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the forest,\n            return the index of the leaf x ends up in.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the forest, return the index of the leaf x ends up in.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_path",
                    "docstring": "\n        Return the decision path in the forest.\n\n        .. versionadded:: 0.18\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        indicator : sparse matrix of shape (n_samples, n_nodes)\n            Return a node indicator matrix where non zero elements indicates\n            that the samples goes through the nodes. The matrix is of CSR\n            format.\n\n        n_nodes_ptr : ndarray of shape (n_estimators + 1,)\n            The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]]\n            gives the indicator value for the i-th estimator.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "indicator",
                            "docstring": "Return a node indicator matrix where non zero elements indicates that the samples goes through the nodes. The matrix is of CSR format.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "n_nodes_ptr",
                            "docstring": "The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]] gives the indicator value for the i-th estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Build a forest of trees from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Internally, its dtype will be converted\n            to ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csc_matrix``.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                          name: 'obj',
                          docstring:
                            'True/False flag to indicate reusing the same instance instead of creating a new one',
                          param_type: ['bool'],
                          returned: true
                        }
                      ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "\n        Predict class for X.\n\n        The predicted class of an input sample is a vote by the trees in\n        the forest, weighted by their probability estimates. That is,\n        the predicted class is the one with highest mean probability\n        estimate across the trees.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,) or (n_samples, n_outputs)\n            The predicted classes.\n        ",
                    inputs: [
                        {
                          name: 'X',
                          default_value: null,
                          param_type: ['array'],
                          expected_shape: '(n_samples, n_features)',
                          docstring: 'Samples.',
                          is_optional: false,
                          options: null
                        },
                        {
                          name: 'obj',
                          docstring:
                            'True/False flag to indicate reusing the same instance instead of creating a new one',
                          param_type: ['bool'],
                          expected_shape: null,
                          is_optional: true,
                          default_value: false,
                          options: null
                        }
                      ]
                    ,
                    "outputs": [
                        {
                            name: 'C',
                            returned: true,
                            param_type: ['array'],
                            docstring: 'Predicted class label per sample.'
                          },
                          {
                            name: 'obj',
                            docstring:
                              'True/False flag to indicate reusing the same instance instead of creating a new one',
                            param_type: ['bool'],
                            returned: true
                          }
                    ]
                },
                {
                    "name": "predict_log_proba",
                    "docstring": "\n        Predict class log-probabilities for X.\n\n        The predicted class log-probabilities of an input sample is computed as\n        the log of the mean predicted class probabilities of the trees in the\n        forest.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes), or a list of n_outputs\n            such arrays if n_outputs > 1.\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "such arrays if n_outputs > 1. The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array",
                                "list"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "\n        Predict class probabilities for X.\n\n        The predicted class probabilities of an input sample are computed as\n        the mean predicted class probabilities of the trees in the forest.\n        The class probability of a single tree is the fraction of samples of\n        the same class in a leaf.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        p : ndarray of shape (n_samples, n_classes), or a list of n_outputs\n            such arrays if n_outputs > 1.\n            The class probabilities of the input samples. The order of the\n            classes corresponds to that in the attribute :term:`classes_`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "p",
                            "docstring": "such arrays if n_outputs > 1. The class probabilities of the input samples. The order of the classes corresponds to that in the attribute :term:`classes_`.",
                            "param_type": [
                                "array",
                                "list"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "RandomForestRegressor",
            "docstring": "\n    A random forest regressor.\n\n    A random forest is a meta estimator that fits a number of classifying\n    decision trees on various sub-samples of the dataset and uses averaging\n    to improve the predictive accuracy and control over-fitting.\n    The sub-sample size is controlled with the `max_samples` parameter if\n    `bootstrap=True` (default), otherwise the whole dataset is used to build\n    each tree.\n\n    Read more in the :ref:`User Guide <forest>`.\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        The number of trees in the forest.\n\n        .. versionchanged:: 0.22\n           The default value of ``n_estimators`` changed from 10 to 100\n           in 0.22.\n\n    criterion : {\"mse\", \"mae\"}, default=\"mse\"\n        The function to measure the quality of a split. Supported criteria\n        are \"mse\" for the mean squared error, which is equal to variance\n        reduction as feature selection criterion, and \"mae\" for the mean\n        absolute error.\n\n        .. versionadded:: 0.18\n           Mean Absolute Error (MAE) criterion.\n\n    max_depth : int, default=None\n        The maximum depth of the tree. If None, then nodes are expanded until\n        all leaves are pure or until all leaves contain less than\n        min_samples_split samples.\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` are the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` are the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_features : {\"auto\", \"sqrt\", \"log2\"}, int or float, default=\"auto\"\n        The number of features to consider when looking for the best split:\n\n        - If int, then consider `max_features` features at each split.\n        - If float, then `max_features` is a fraction and\n          `int(max_features * n_features)` features are considered at each\n          split.\n        - If \"auto\", then `max_features=n_features`.\n        - If \"sqrt\", then `max_features=sqrt(n_features)`.\n        - If \"log2\", then `max_features=log2(n_features)`.\n        - If None, then `max_features=n_features`.\n\n        Note: the search for a split does not stop until at least one\n        valid partition of the node samples is found, even if it requires to\n        effectively inspect more than ``max_features`` features.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    bootstrap : bool, default=True\n        Whether bootstrap samples are used when building trees. If False, the\n        whole dataset is used to build each tree.\n\n    oob_score : bool, default=False\n        whether to use out-of-bag samples to estimate\n        the R^2 on unseen data.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`,\n        :meth:`decision_path` and :meth:`apply` are all parallelized over the\n        trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors. See :term:`Glossary\n        <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls both the randomness of the bootstrapping of the samples used\n        when building trees (if ``bootstrap=True``) and the sampling of the\n        features to consider when looking for the best split at each node\n        (if ``max_features < n_features``).\n        See :term:`Glossary <random_state>` for details.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n    ccp_alpha : non-negative float, default=0.0\n        Complexity parameter used for Minimal Cost-Complexity Pruning. The\n        subtree with the largest cost complexity that is smaller than\n        ``ccp_alpha`` will be chosen. By default, no pruning is performed. See\n        :ref:`minimal_cost_complexity_pruning` for details.\n\n        .. versionadded:: 0.22\n\n    max_samples : int or float, default=None\n        If bootstrap is True, the number of samples to draw from X\n        to train each base estimator.\n\n        - If None (default), then draw `X.shape[0]` samples.\n        - If int, then draw `max_samples` samples.\n        - If float, then draw `max_samples * X.shape[0]` samples. Thus,\n          `max_samples` should be in the interval `(0, 1)`.\n\n        .. versionadded:: 0.22\n\n    Attributes\n    ----------\n    base_estimator_ : DecisionTreeRegressor\n        The child estimator template used to create the collection of fitted\n        sub-estimators.\n\n    estimators_ : list of DecisionTreeRegressor\n        The collection of fitted sub-estimators.\n\n    feature_importances_ : ndarray of shape (n_features,)\n        The impurity-based feature importances.\n        The higher, the more important the feature.\n        The importance of a feature is computed as the (normalized)\n        total reduction of the criterion brought by that feature.  It is also\n        known as the Gini importance.\n\n        Warning: impurity-based feature importances can be misleading for\n        high cardinality features (many unique values). See\n        :func:`sklearn.inspection.permutation_importance` as an alternative.\n\n    n_features_ : int\n        The number of features when ``fit`` is performed.\n\n    n_outputs_ : int\n        The number of outputs when ``fit`` is performed.\n\n    oob_score_ : float\n        Score of the training dataset obtained using an out-of-bag estimate.\n        This attribute exists only when ``oob_score`` is True.\n\n    oob_prediction_ : ndarray of shape (n_samples,)\n        Prediction computed with out-of-bag estimate on the training set.\n        This attribute exists only when ``oob_score`` is True.\n\n    See Also\n    --------\n    DecisionTreeRegressor, ExtraTreesRegressor\n\n    Notes\n    -----\n    The default values for the parameters controlling the size of the trees\n    (e.g. ``max_depth``, ``min_samples_leaf``, etc.) lead to fully grown and\n    unpruned trees which can potentially be very large on some data sets. To\n    reduce memory consumption, the complexity and size of the trees should be\n    controlled by setting those parameter values.\n\n    The features are always randomly permuted at each split. Therefore,\n    the best found split may vary, even with the same training data,\n    ``max_features=n_features`` and ``bootstrap=False``, if the improvement\n    of the criterion is identical for several splits enumerated during the\n    search of the best split. To obtain a deterministic behaviour during\n    fitting, ``random_state`` has to be fixed.\n\n    The default value ``max_features=\"auto\"`` uses ``n_features``\n    rather than ``n_features / 3``. The latter was originally suggested in\n    [1], whereas the former was more recently justified empirically in [2].\n\n    References\n    ----------\n    .. [1] L. Breiman, \"Random Forests\", Machine Learning, 45(1), 5-32, 2001.\n\n    .. [2] P. Geurts, D. Ernst., and L. Wehenkel, \"Extremely randomized\n           trees\", Machine Learning, 63(1), 3-42, 2006.\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import RandomForestRegressor\n    >>> from sklearn.datasets import make_regression\n    >>> X, y = make_regression(n_features=4, n_informative=2,\n    ...                        random_state=0, shuffle=False)\n    >>> regr = RandomForestRegressor(max_depth=2, random_state=0)\n    >>> regr.fit(X, y)\n    RandomForestRegressor(...)\n    >>> print(regr.predict([[0, 0, 0, 0]]))\n    [-8.32987858]\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "The number of trees in the forest.  .. versionchanged:: 0.22    The default value of ``n_estimators`` changed from 10 to 100    in 0.22.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "criterion",
                    "docstring": "The function to measure the quality of a split. Supported criteria are \"mse\" for the mean squared error, which is equal to variance reduction as feature selection criterion, and \"mae\" for the mean absolute error.  .. versionadded:: 0.18    Mean Absolute Error (MAE) criterion.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"mse\"",
                    "options": [
                        "mse",
                        "mae",
                        "default=mse"
                    ]
                },
                {
                    "name": "max_depth",
                    "docstring": "The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` are the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` are the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_features",
                    "docstring": "The number of features to consider when looking for the best split:  - If int, then consider `max_features` features at each split. - If float, then `max_features` is a fraction and   `int(max_features * n_features)` features are considered at each   split. - If \"auto\", then `max_features=n_features`. - If \"sqrt\", then `max_features=sqrt(n_features)`. - If \"log2\", then `max_features=log2(n_features)`. - If None, then `max_features=n_features`.  Note: the search for a split does not stop until at least one valid partition of the node samples is found, even if it requires to effectively inspect more than ``max_features`` features.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "\"auto\"",
                    "options": [
                        "auto",
                        "sqrt",
                        "log2",
                        "int or float",
                        "default=auto"
                    ]
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "bootstrap",
                    "docstring": "Whether bootstrap samples are used when building trees. If False, the whole dataset is used to build each tree.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "oob_score",
                    "docstring": "whether to use out-of-bag samples to estimate the R^2 on unseen data.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel. :meth:`fit`, :meth:`predict`, :meth:`decision_path` and :meth:`apply` are all parallelized over the trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls both the randomness of the bootstrapping of the samples used when building trees (if ``bootstrap=True``) and the sampling of the features to consider when looking for the best split at each node (if ``max_features < n_features``). See :term:`Glossary <random_state>` for details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "ccp_alpha",
                    "docstring": "Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than ``ccp_alpha`` will be chosen. By default, no pruning is performed. See :ref:`minimal_cost_complexity_pruning` for details.  .. versionadded:: 0.22",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_samples",
                    "docstring": "If bootstrap is True, the number of samples to draw from X to train each base estimator.  - If None (default), then draw `X.shape[0]` samples. - If int, then draw `max_samples` samples. - If float, then draw `max_samples * X.shape[0]` samples. Thus,   `max_samples` should be in the interval `(0, 1)`.  .. versionadded:: 0.22",
                    "param_type": [
                        "int",
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "base_estimator_",
                    "docstring": "The child estimator template used to create the collection of fitted sub-estimators.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "feature_importances_",
                    "docstring": "The impurity-based feature importances. The higher, the more important the feature. The importance of a feature is computed as the (normalized) total reduction of the criterion brought by that feature.  It is also known as the Gini importance.  Warning: impurity-based feature importances can be misleading for high cardinality features (many unique values). See :func:`sklearn.inspection.permutation_importance` as an alternative.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "n_features_",
                    "docstring": "The number of features when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "n_outputs_",
                    "docstring": "The number of outputs when ``fit`` is performed.",
                    "param_type": [
                        "int"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_score_",
                    "docstring": "Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "float"
                    ],
                    "returned": false
                },
                {
                    "name": "oob_prediction_",
                    "docstring": "Prediction computed with out-of-bag estimate on the training set. This attribute exists only when ``oob_score`` is True.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_compute_partial_dependence_recursion",
                    "docstring": "Fast partial dependence computation.\n\n        Parameters\n        ----------\n        grid : ndarray of shape (n_samples, n_target_features)\n            The grid points on which the partial dependence should be\n            evaluated.\n        target_features : ndarray of shape (n_target_features)\n            The set of target features for which the partial dependence\n            should be evaluated.\n\n        Returns\n        -------\n        averaged_predictions : ndarray of shape (n_samples,)\n            The value of the partial dependence function on each grid point.\n        ",
                    "inputs": [
                        {
                            "name": "grid",
                            "docstring": "The grid points on which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "target_features",
                            "docstring": "The set of target features for which the partial dependence should be evaluated.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_target_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "averaged_predictions",
                            "docstring": "The value of the partial dependence function on each grid point.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "\n        Compute out-of-bag scores.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_X_predict",
                    "docstring": "\n        Validate X whenever one tries to predict, apply, predict_proba.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y_class_weight",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "\n        Apply trees in the forest to X, return leaf indices.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : ndarray of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the forest,\n            return the index of the leaf x ends up in.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the forest, return the index of the leaf x ends up in.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_path",
                    "docstring": "\n        Return the decision path in the forest.\n\n        .. versionadded:: 0.18\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        indicator : sparse matrix of shape (n_samples, n_nodes)\n            Return a node indicator matrix where non zero elements indicates\n            that the samples goes through the nodes. The matrix is of CSR\n            format.\n\n        n_nodes_ptr : ndarray of shape (n_estimators + 1,)\n            The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]]\n            gives the indicator value for the i-th estimator.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "indicator",
                            "docstring": "Return a node indicator matrix where non zero elements indicates that the samples goes through the nodes. The matrix is of CSR format.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "n_nodes_ptr",
                            "docstring": "The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]] gives the indicator value for the i-th estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Build a forest of trees from the training set (X, y).\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The training input samples. Internally, its dtype will be converted\n            to ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csc_matrix``.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            The target values (class labels in classification, real numbers in\n            regression).\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The training input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csc_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The target values (class labels in classification, real numbers in regression).",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict",
                    "docstring": "\n        Predict regression target for X.\n\n        The predicted regression target of an input sample is computed as the\n        mean predicted regression targets of the trees in the forest.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,) or (n_samples, n_outputs)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                }
            ],
            "nodes": []
        },
        {
            "name": "RandomTreesEmbedding",
            "docstring": "\n    An ensemble of totally random trees.\n\n    An unsupervised transformation of a dataset to a high-dimensional\n    sparse representation. A datapoint is coded according to which leaf of\n    each tree it is sorted into. Using a one-hot encoding of the leaves,\n    this leads to a binary coding with as many ones as there are trees in\n    the forest.\n\n    The dimensionality of the resulting representation is\n    ``n_out <= n_estimators * max_leaf_nodes``. If ``max_leaf_nodes == None``,\n    the number of leaf nodes is at most ``n_estimators * 2 ** max_depth``.\n\n    Read more in the :ref:`User Guide <random_trees_embedding>`.\n\n    Parameters\n    ----------\n    n_estimators : int, default=100\n        Number of trees in the forest.\n\n        .. versionchanged:: 0.22\n           The default value of ``n_estimators`` changed from 10 to 100\n           in 0.22.\n\n    max_depth : int, default=5\n        The maximum depth of each tree. If None, then nodes are expanded until\n        all leaves are pure or until all leaves contain less than\n        min_samples_split samples.\n\n    min_samples_split : int or float, default=2\n        The minimum number of samples required to split an internal node:\n\n        - If int, then consider `min_samples_split` as the minimum number.\n        - If float, then `min_samples_split` is a fraction and\n          `ceil(min_samples_split * n_samples)` is the minimum\n          number of samples for each split.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_samples_leaf : int or float, default=1\n        The minimum number of samples required to be at a leaf node.\n        A split point at any depth will only be considered if it leaves at\n        least ``min_samples_leaf`` training samples in each of the left and\n        right branches.  This may have the effect of smoothing the model,\n        especially in regression.\n\n        - If int, then consider `min_samples_leaf` as the minimum number.\n        - If float, then `min_samples_leaf` is a fraction and\n          `ceil(min_samples_leaf * n_samples)` is the minimum\n          number of samples for each node.\n\n        .. versionchanged:: 0.18\n           Added float values for fractions.\n\n    min_weight_fraction_leaf : float, default=0.0\n        The minimum weighted fraction of the sum total of weights (of all\n        the input samples) required to be at a leaf node. Samples have\n        equal weight when sample_weight is not provided.\n\n    max_leaf_nodes : int, default=None\n        Grow trees with ``max_leaf_nodes`` in best-first fashion.\n        Best nodes are defined as relative reduction in impurity.\n        If None then unlimited number of leaf nodes.\n\n    min_impurity_decrease : float, default=0.0\n        A node will be split if this split induces a decrease of the impurity\n        greater than or equal to this value.\n\n        The weighted impurity decrease equation is the following::\n\n            N_t / N * (impurity - N_t_R / N_t * right_impurity\n                                - N_t_L / N_t * left_impurity)\n\n        where ``N`` is the total number of samples, ``N_t`` is the number of\n        samples at the current node, ``N_t_L`` is the number of samples in the\n        left child, and ``N_t_R`` is the number of samples in the right child.\n\n        ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum,\n        if ``sample_weight`` is passed.\n\n        .. versionadded:: 0.19\n\n    min_impurity_split : float, default=None\n        Threshold for early stopping in tree growth. A node will split\n        if its impurity is above the threshold, otherwise it is a leaf.\n\n        .. deprecated:: 0.19\n           ``min_impurity_split`` has been deprecated in favor of\n           ``min_impurity_decrease`` in 0.19. The default value of\n           ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it\n           will be removed in 0.25. Use ``min_impurity_decrease`` instead.\n\n    sparse_output : bool, default=True\n        Whether or not to return a sparse CSR matrix, as default behavior,\n        or to return a dense array compatible with dense pipeline operators.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel. :meth:`fit`, :meth:`transform`,\n        :meth:`decision_path` and :meth:`apply` are all parallelized over the\n        trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend`\n        context. ``-1`` means using all processors. See :term:`Glossary\n        <n_jobs>` for more details.\n\n    random_state : int or RandomState, default=None\n        Controls the generation of the random `y` used to fit the trees\n        and the draw of the splits for each feature at the trees' nodes.\n        See :term:`Glossary <random_state>` for details.\n\n    verbose : int, default=0\n        Controls the verbosity when fitting and predicting.\n\n    warm_start : bool, default=False\n        When set to ``True``, reuse the solution of the previous call to fit\n        and add more estimators to the ensemble, otherwise, just fit a whole\n        new forest. See :term:`the Glossary <warm_start>`.\n\n    Attributes\n    ----------\n    estimators_ : list of DecisionTreeClassifier\n        The collection of fitted sub-estimators.\n\n    References\n    ----------\n    .. [1] P. Geurts, D. Ernst., and L. Wehenkel, \"Extremely randomized trees\",\n           Machine Learning, 63(1), 3-42, 2006.\n    .. [2] Moosmann, F. and Triggs, B. and Jurie, F.  \"Fast discriminative\n           visual codebooks using randomized clustering forests\"\n           NIPS 2007\n\n    Examples\n    --------\n    >>> from sklearn.ensemble import RandomTreesEmbedding\n    >>> X = [[0,0], [1,0], [0,1], [-1,0], [0,-1]]\n    >>> random_trees = RandomTreesEmbedding(\n    ...    n_estimators=5, random_state=0, max_depth=1).fit(X)\n    >>> X_sparse_embedding = random_trees.transform(X)\n    >>> X_sparse_embedding.toarray()\n    array([[0., 1., 1., 0., 1., 0., 0., 1., 1., 0.],\n           [0., 1., 1., 0., 1., 0., 0., 1., 1., 0.],\n           [0., 1., 0., 1., 0., 1., 0., 1., 0., 1.],\n           [1., 0., 1., 0., 1., 0., 1., 0., 1., 0.],\n           [0., 1., 1., 0., 1., 0., 0., 1., 1., 0.]])\n    ",
            "inputs": [
                {
                    "name": "n_estimators",
                    "docstring": "Number of trees in the forest.  .. versionchanged:: 0.22    The default value of ``n_estimators`` changed from 10 to 100    in 0.22.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "100",
                    "options": null
                },
                {
                    "name": "max_depth",
                    "docstring": "The maximum depth of each tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "5",
                    "options": null
                },
                {
                    "name": "min_samples_split",
                    "docstring": "The minimum number of samples required to split an internal node:  - If int, then consider `min_samples_split` as the minimum number. - If float, then `min_samples_split` is a fraction and   `ceil(min_samples_split * n_samples)` is the minimum   number of samples for each split.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "2",
                    "options": null
                },
                {
                    "name": "min_samples_leaf",
                    "docstring": "The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least ``min_samples_leaf`` training samples in each of the left and right branches.  This may have the effect of smoothing the model, especially in regression.  - If int, then consider `min_samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and   `ceil(min_samples_leaf * n_samples)` is the minimum   number of samples for each node.  .. versionchanged:: 0.18    Added float values for fractions.",
                    "param_type": [
                        "int",
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "1",
                    "options": null
                },
                {
                    "name": "min_weight_fraction_leaf",
                    "docstring": "The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "max_leaf_nodes",
                    "docstring": "Grow trees with ``max_leaf_nodes`` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "min_impurity_decrease",
                    "docstring": "A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following::      N_t / N * (impurity - N_t_R / N_t * right_impurity                         - N_t_L / N_t * left_impurity)  where ``N`` is the total number of samples, ``N_t`` is the number of samples at the current node, ``N_t_L`` is the number of samples in the left child, and ``N_t_R`` is the number of samples in the right child.  ``N``, ``N_t``, ``N_t_R`` and ``N_t_L`` all refer to the weighted sum, if ``sample_weight`` is passed.  .. versionadded:: 0.19",
                    "param_type": [
                        "float"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0.0",
                    "options": null
                },
                {
                    "name": "min_impurity_split",
                    "docstring": "Threshold for early stopping in tree growth. A node will split if its impurity is above the threshold, otherwise it is a leaf.  .. deprecated:: 0.19    ``min_impurity_split`` has been deprecated in favor of    ``min_impurity_decrease`` in 0.19. The default value of    ``min_impurity_split`` has changed from 1e-7 to 0 in 0.23 and it    will be removed in 0.25. Use ``min_impurity_decrease`` instead.",
                    "param_type": [
                        "float",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "sparse_output",
                    "docstring": "Whether or not to return a sparse CSR matrix, as default behavior, or to return a dense array compatible with dense pipeline operators.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel. :meth:`fit`, :meth:`transform`, :meth:`decision_path` and :meth:`apply` are all parallelized over the trees. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "random_state",
                    "docstring": "Controls the generation of the random `y` used to fit the trees and the draw of the splits for each feature at the trees' nodes. See :term:`Glossary <random_state>` for details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Controls the verbosity when fitting and predicting.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                },
                {
                    "name": "warm_start",
                    "docstring": "When set to ``True``, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See :term:`the Glossary <warm_start>`.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_make_estimator",
                    "docstring": "Make and configure a copy of the `base_estimator_` attribute.\n\n        Warning: This method should be used to properly instantiate new\n        sub-estimators.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_oob_score",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_X_predict",
                    "docstring": "\n        Validate X whenever one tries to predict, apply, predict_proba.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimator",
                    "docstring": "Check the estimator and the n_estimator attribute.\n\n        Sets the base_estimator_` attributes.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_y_class_weight",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "apply",
                    "docstring": "\n        Apply trees in the forest to X, return leaf indices.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        X_leaves : ndarray of shape (n_samples, n_estimators)\n            For each datapoint x in X and for each tree in the forest,\n            return the index of the leaf x ends up in.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_leaves",
                            "docstring": "For each datapoint x in X and for each tree in the forest, return the index of the leaf x ends up in.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "decision_path",
                    "docstring": "\n        Return the decision path in the forest.\n\n        .. versionadded:: 0.18\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Internally, its dtype will be converted to\n            ``dtype=np.float32``. If a sparse matrix is provided, it will be\n            converted into a sparse ``csr_matrix``.\n\n        Returns\n        -------\n        indicator : sparse matrix of shape (n_samples, n_nodes)\n            Return a node indicator matrix where non zero elements indicates\n            that the samples goes through the nodes. The matrix is of CSR\n            format.\n\n        n_nodes_ptr : ndarray of shape (n_estimators + 1,)\n            The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]]\n            gives the indicator value for the i-th estimator.\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Internally, its dtype will be converted to ``dtype=np.float32``. If a sparse matrix is provided, it will be converted into a sparse ``csr_matrix``.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "indicator",
                            "docstring": "Return a node indicator matrix where non zero elements indicates that the samples goes through the nodes. The matrix is of CSR format.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        },
                        {
                            "name": "n_nodes_ptr",
                            "docstring": "The columns from indicator[n_nodes_ptr[i]:n_nodes_ptr[i+1]] gives the indicator value for the i-th estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "\n        Fit estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples. Use ``dtype=np.float32`` for maximum\n            efficiency. Sparse matrices are also supported, use sparse\n            ``csc_matrix`` for maximum efficiency.\n\n        y : Ignored\n            Not used, present for API consistency by convention.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        self : object\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples. Use ``dtype=np.float32`` for maximum efficiency. Sparse matrices are also supported, use sparse ``csc_matrix`` for maximum efficiency.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Not used, present for API consistency by convention.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_transform",
                    "docstring": "\n        Fit estimator and transform dataset.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Input data used to build forests. Use ``dtype=np.float32`` for\n            maximum efficiency.\n\n        y : Ignored\n            Not used, present for API consistency by convention.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted. Splits\n            that would create child nodes with net zero or negative weight are\n            ignored while searching for a split in each node. In the case of\n            classification, splits are also ignored if they would result in any\n            single class carrying a negative weight in either child node.\n\n        Returns\n        -------\n        X_transformed : sparse matrix of shape (n_samples, n_out)\n            Transformed dataset.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Input data used to build forests. Use ``dtype=np.float32`` for maximum efficiency.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Not used, present for API consistency by convention.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_transformed",
                            "docstring": "Transformed dataset.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get parameters for this estimator.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            If True, will return the parameters for this estimator and\n            contained subobjects that are estimators.\n\n        Returns\n        -------\n        params : mapping of string to any\n            Parameter names mapped to their values.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "If True, will return the parameters for this estimator and contained subobjects that are estimators.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "params",
                            "docstring": "Parameter names mapped to their values.",
                            "param_type": [
                                "str"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of this estimator.\n\n        The method works on simple estimators as well as on nested objects\n        (such as pipelines). The latter have parameters of the form\n        ``<component>__<parameter>`` so that it's possible to update each\n        component of a nested object.\n\n        Parameters\n        ----------\n        **params : dict\n            Estimator parameters.\n\n        Returns\n        -------\n        self : object\n            Estimator instance.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Estimator parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "transform",
                    "docstring": "\n        Transform dataset.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Input data to be transformed. Use ``dtype=np.float32`` for maximum\n            efficiency. Sparse matrices are also supported, use sparse\n            ``csr_matrix`` for maximum efficiency.\n\n        Returns\n        -------\n        X_transformed : sparse matrix of shape (n_samples, n_out)\n            Transformed dataset.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Input data to be transformed. Use ``dtype=np.float32`` for maximum efficiency. Sparse matrices are also supported, use sparse ``csr_matrix`` for maximum efficiency.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_transformed",
                            "docstring": "Transformed dataset.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "StackingClassifier",
            "docstring": "Stack of estimators with a final classifier.\n\n    Stacked generalization consists in stacking the output of individual\n    estimator and use a classifier to compute the final prediction. Stacking\n    allows to use the strength of each individual estimator by using their\n    output as input of a final estimator.\n\n    Note that `estimators_` are fitted on the full `X` while `final_estimator_`\n    is trained using cross-validated predictions of the base estimators using\n    `cross_val_predict`.\n\n    .. versionadded:: 0.22\n\n    Read more in the :ref:`User Guide <stacking>`.\n\n    Parameters\n    ----------\n    estimators : list of (str, estimator)\n        Base estimators which will be stacked together. Each element of the\n        list is defined as a tuple of string (i.e. name) and an estimator\n        instance. An estimator can be set to 'drop' using `set_params`.\n\n    final_estimator : estimator, default=None\n        A classifier which will be used to combine the base estimators.\n        The default classifier is a `LogisticRegression`.\n\n    cv : int, cross-validation generator or an iterable, default=None\n        Determines the cross-validation splitting strategy used in\n        `cross_val_predict` to train `final_estimator`. Possible inputs for\n        cv are:\n\n        * None, to use the default 5-fold cross validation,\n        * integer, to specify the number of folds in a (Stratified) KFold,\n        * An object to be used as a cross-validation generator,\n        * An iterable yielding train, test splits.\n\n        For integer/None inputs, if the estimator is a classifier and y is\n        either binary or multiclass, `StratifiedKFold` is used. In all other\n        cases, `KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. note::\n           A larger number of split will provide no benefits if the number\n           of training samples is large enough. Indeed, the training time\n           will increase. ``cv`` is not used for model evaluation but for\n           prediction.\n\n    stack_method : {'auto', 'predict_proba', 'decision_function', 'predict'},             default='auto'\n        Methods called for each base estimator. It can be:\n\n        * if 'auto', it will try to invoke, for each estimator,\n          `'predict_proba'`, `'decision_function'` or `'predict'` in that\n          order.\n        * otherwise, one of `'predict_proba'`, `'decision_function'` or\n          `'predict'`. If the method is not implemented by the estimator, it\n          will raise an error.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel all `estimators` `fit`.\n        `None` means 1 unless in a `joblib.parallel_backend` context. -1 means\n        using all processors. See Glossary for more details.\n\n    passthrough : bool, default=False\n        When False, only the predictions of estimators will be used as\n        training data for `final_estimator`. When True, the\n        `final_estimator` is trained on the predictions as well as the\n        original training data.\n\n    verbose : int, default=0\n        Verbosity level.\n\n    Attributes\n    ----------\n    classes_ : ndarray of shape (n_classes,)\n        Class labels.\n\n    estimators_ : list of estimators\n        The elements of the estimators parameter, having been fitted on the\n        training data. If an estimator has been set to `'drop'`, it\n        will not appear in `estimators_`.\n\n    named_estimators_ : :class:`~sklearn.utils.Bunch`\n        Attribute to access any fitted sub-estimators by name.\n\n    final_estimator_ : estimator\n        The classifier which predicts given the output of `estimators_`.\n\n    stack_method_ : list of str\n        The method used by each base estimator.\n\n    Notes\n    -----\n    When `predict_proba` is used by each estimator (i.e. most of the time for\n    `stack_method='auto'` or specifically for `stack_method='predict_proba'`),\n    The first column predicted by each estimator will be dropped in the case\n    of a binary classification problem. Indeed, both feature will be perfectly\n    collinear.\n\n    References\n    ----------\n    .. [1] Wolpert, David H. \"Stacked generalization.\" Neural networks 5.2\n       (1992): 241-259.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_iris\n    >>> from sklearn.ensemble import RandomForestClassifier\n    >>> from sklearn.svm import LinearSVC\n    >>> from sklearn.linear_model import LogisticRegression\n    >>> from sklearn.preprocessing import StandardScaler\n    >>> from sklearn.pipeline import make_pipeline\n    >>> from sklearn.ensemble import StackingClassifier\n    >>> X, y = load_iris(return_X_y=True)\n    >>> estimators = [\n    ...     ('rf', RandomForestClassifier(n_estimators=10, random_state=42)),\n    ...     ('svr', make_pipeline(StandardScaler(),\n    ...                           LinearSVC(random_state=42)))\n    ... ]\n    >>> clf = StackingClassifier(\n    ...     estimators=estimators, final_estimator=LogisticRegression()\n    ... )\n    >>> from sklearn.model_selection import train_test_split\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, stratify=y, random_state=42\n    ... )\n    >>> clf.fit(X_train, y_train).score(X_test, y_test)\n    0.9...\n\n    ",
            "inputs": [
                {
                    "name": "estimators",
                    "docstring": "Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to 'drop' using `set_params`.",
                    "param_type": [
                        "str",
                        "list"
                    ],
                    "expected_shape": null,
                    "is_optional": false,
                    "default_value": null,
                    "options": null
                },
                {
                    "name": "final_estimator",
                    "docstring": "A classifier which will be used to combine the base estimators. The default classifier is a `LogisticRegression`.",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "cv",
                    "docstring": "Determines the cross-validation splitting strategy used in `cross_val_predict` to train `final_estimator`. Possible inputs for cv are:  * None, to use the default 5-fold cross validation, * integer, to specify the number of folds in a (Stratified) KFold, * An object to be used as a cross-validation generator, * An iterable yielding train, test splits.  For integer/None inputs, if the estimator is a classifier and y is either binary or multiclass, `StratifiedKFold` is used. In all other cases, `KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. note::    A larger number of split will provide no benefits if the number    of training samples is large enough. Indeed, the training time    will increase. ``cv`` is not used for model evaluation but for    prediction.",
                    "param_type": [
                        "int",
                        "iter",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "stack_method",
                    "docstring": "Methods called for each base estimator. It can be:  * if 'auto', it will try to invoke, for each estimator,   `'predict_proba'`, `'decision_function'` or `'predict'` in that   order. * otherwise, one of `'predict_proba'`, `'decision_function'` or   `'predict'`. If the method is not implemented by the estimator, it   will raise an error.",
                    "param_type": [
                        "LIST_VALID_OPTIONS",
                        "dict"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "auto",
                    "options": [
                        "auto",
                        "predict_proba",
                        "decision_function",
                        "predict",
                        "default=auto"
                    ]
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel all `estimators` `fit`. `None` means 1 unless in a `joblib.parallel_backend` context. -1 means using all processors. See Glossary for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "passthrough",
                    "docstring": "When False, only the predictions of estimators will be used as training data for `final_estimator`. When True, the `final_estimator` is trained on the predictions as well as the original training data.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Verbosity level.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "classes_",
                    "docstring": "Class labels.",
                    "param_type": [
                        "array"
                    ],
                    "returned": false
                },
                {
                    "name": "estimators_",
                    "docstring": "The elements of the estimators parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators_`.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "named_estimators_",
                    "docstring": "Attribute to access any fitted sub-estimators by name.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "final_estimator_",
                    "docstring": "The classifier which predicts given the output of `estimators_`.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "stack_method_",
                    "docstring": "The method used by each base estimator.",
                    "param_type": [
                        "str",
                        "list"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_clone_final_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_concatenate_predictions",
                    "docstring": "Concatenate the predictions of each first layer learner and\n        possibly the input dataset `X`.\n\n        If `X` is sparse and `self.passthrough` is False, the output of\n        `transform` will be dense (the predictions). If `X` is sparse\n        and `self.passthrough` is True, the output of `transform` will\n        be sparse.\n\n        This helper is in charge of ensuring the predictions are 2D arrays and\n        it will drop one of the probability column when using probabilities\n        in the binary case. Indeed, the p(y|c=0) = 1 - p(y|c=1)\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_method_name",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_replace_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_sk_visual_block_",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_transform",
                    "docstring": "Concatenate and return the predictions of the estimators.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimators",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_final_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_names",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "decision_function",
                    "docstring": "Predict decision function for samples in X using\n        `final_estimator_.decision_function`.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        Returns\n        -------\n        decisions : ndarray of shape (n_samples,), (n_samples, n_classes),             or (n_samples, n_classes * (n_classes-1) / 2)\n            The decision function computed the final estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "decisions",
                            "docstring": "The decision function computed the final estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "fit",
                    "docstring": "Fit the estimators.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where `n_samples` is the number of samples and\n            `n_features` is the number of features.\n\n        y : array-like of shape (n_samples,)\n            Target values.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if all underlying estimators\n            support sample weights.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_transform",
                    "docstring": "\n        Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n\n        y : ndarray of shape (n_samples,), default=None\n            Target values.\n\n        **fit_params : dict\n            Additional fit parameters.\n\n        Returns\n        -------\n        X_new : ndarray array of shape (n_samples, n_features_new)\n            Transformed array.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "**fit_params",
                            "docstring": "Additional fit parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_new",
                            "docstring": "Transformed array.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get the parameters of an estimator from the ensemble.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            Setting it to True gets the various classifiers and the parameters\n            of the classifiers as well.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "Setting it to True gets the various classifiers and the parameters of the classifiers as well.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "predict",
                    "docstring": "Predict target for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        **predict_params : dict of str -> obj\n            Parameters to the `predict` called by the `final_estimator`. Note\n            that this may be used to return uncertainties from some estimators\n            with `return_std` or `return_cov`. Be aware that it will only\n            accounts for uncertainty in the final estimator.\n\n        Returns\n        -------\n        y_pred : ndarray of shape (n_samples,) or (n_samples, n_output)\n            Predicted targets.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "**predict_params",
                            "docstring": "Parameters to the `predict` called by the `final_estimator`. Note that this may be used to return uncertainties from some estimators with `return_std` or `return_cov`. Be aware that it will only accounts for uncertainty in the final estimator.",
                            "param_type": [
                                "str",
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y_pred",
                            "docstring": "Predicted targets.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "predict_proba",
                    "docstring": "Predict class probabilities for X using\n        `final_estimator_.predict_proba`.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        Returns\n        -------\n        probabilities : ndarray of shape (n_samples, n_classes) or             list of ndarray of shape (n_output,)\n            The class probabilities of the input samples.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "probabilities",
                            "docstring": "The class probabilities of the input samples.",
                            "param_type": [
                                "array",
                                "list"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of an estimator from the ensemble.\n\n        Valid parameter keys can be listed with `get_params()`.\n\n        Parameters\n        ----------\n        **params : keyword arguments\n            Specific parameters using e.g.\n            `set_params(parameter_name=new_value)`. In addition, to setting the\n            parameters of the stacking estimator, the individual estimator of\n            the stacking estimators can also be set, or can be removed by\n            setting them to 'drop'.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Specific parameters using e.g. `set_params(parameter_name=new_value)`. In addition, to setting the parameters of the stacking estimator, the individual estimator of the stacking estimators can also be set, or can be removed by setting them to 'drop'.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "transform",
                    "docstring": "Return class labels or probabilities for X for each estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where `n_samples` is the number of samples and\n            `n_features` is the number of features.\n\n        Returns\n        -------\n        y_preds : ndarray of shape (n_samples, n_estimators) or                 (n_samples, n_classes * n_estimators)\n            Prediction outputs for each estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y_preds",
                            "docstring": "Prediction outputs for each estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "StackingRegressor",
            "docstring": "Stack of estimators with a final regressor.\n\n    Stacked generalization consists in stacking the output of individual\n    estimator and use a regressor to compute the final prediction. Stacking\n    allows to use the strength of each individual estimator by using their\n    output as input of a final estimator.\n\n    Note that `estimators_` are fitted on the full `X` while `final_estimator_`\n    is trained using cross-validated predictions of the base estimators using\n    `cross_val_predict`.\n\n    .. versionadded:: 0.22\n\n    Read more in the :ref:`User Guide <stacking>`.\n\n    Parameters\n    ----------\n    estimators : list of (str, estimator)\n        Base estimators which will be stacked together. Each element of the\n        list is defined as a tuple of string (i.e. name) and an estimator\n        instance. An estimator can be set to 'drop' using `set_params`.\n\n    final_estimator : estimator, default=None\n        A regressor which will be used to combine the base estimators.\n        The default regressor is a `RidgeCV`.\n\n    cv : int, cross-validation generator or an iterable, default=None\n        Determines the cross-validation splitting strategy used in\n        `cross_val_predict` to train `final_estimator`. Possible inputs for\n        cv are:\n\n        * None, to use the default 5-fold cross validation,\n        * integer, to specify the number of folds in a (Stratified) KFold,\n        * An object to be used as a cross-validation generator,\n        * An iterable yielding train, test splits.\n\n        For integer/None inputs, if the estimator is a classifier and y is\n        either binary or multiclass, `StratifiedKFold` is used. In all other\n        cases, `KFold` is used.\n\n        Refer :ref:`User Guide <cross_validation>` for the various\n        cross-validation strategies that can be used here.\n\n        .. note::\n           A larger number of split will provide no benefits if the number\n           of training samples is large enough. Indeed, the training time\n           will increase. ``cv`` is not used for model evaluation but for\n           prediction.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for `fit` of all `estimators`.\n        `None` means 1 unless in a `joblib.parallel_backend` context. -1 means\n        using all processors. See Glossary for more details.\n\n    passthrough : bool, default=False\n        When False, only the predictions of estimators will be used as\n        training data for `final_estimator`. When True, the\n        `final_estimator` is trained on the predictions as well as the\n        original training data.\n\n    verbose : int, default=0\n        Verbosity level.\n\n    Attributes\n    ----------\n    estimators_ : list of estimator\n        The elements of the estimators parameter, having been fitted on the\n        training data. If an estimator has been set to `'drop'`, it\n        will not appear in `estimators_`.\n\n    named_estimators_ : :class:`~sklearn.utils.Bunch`\n        Attribute to access any fitted sub-estimators by name.\n\n\n    final_estimator_ : estimator\n        The regressor to stacked the base estimators fitted.\n\n    References\n    ----------\n    .. [1] Wolpert, David H. \"Stacked generalization.\" Neural networks 5.2\n       (1992): 241-259.\n\n    Examples\n    --------\n    >>> from sklearn.datasets import load_diabetes\n    >>> from sklearn.linear_model import RidgeCV\n    >>> from sklearn.svm import LinearSVR\n    >>> from sklearn.ensemble import RandomForestRegressor\n    >>> from sklearn.ensemble import StackingRegressor\n    >>> X, y = load_diabetes(return_X_y=True)\n    >>> estimators = [\n    ...     ('lr', RidgeCV()),\n    ...     ('svr', LinearSVR(random_state=42))\n    ... ]\n    >>> reg = StackingRegressor(\n    ...     estimators=estimators,\n    ...     final_estimator=RandomForestRegressor(n_estimators=10,\n    ...                                           random_state=42)\n    ... )\n    >>> from sklearn.model_selection import train_test_split\n    >>> X_train, X_test, y_train, y_test = train_test_split(\n    ...     X, y, random_state=42\n    ... )\n    >>> reg.fit(X_train, y_train).score(X_test, y_test)\n    0.3...\n\n    ",
            "inputs": [
                {
                    "name": "estimators",
                    "docstring": "Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to 'drop' using `set_params`.",
                    "param_type": [
                        "str",
                        "list"
                    ],
                    "expected_shape": null,
                    "is_optional": false,
                    "default_value": null,
                    "options": null
                },
                {
                    "name": "final_estimator",
                    "docstring": "A regressor which will be used to combine the base estimators. The default regressor is a `RidgeCV`.",
                    "param_type": [
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "cv",
                    "docstring": "Determines the cross-validation splitting strategy used in `cross_val_predict` to train `final_estimator`. Possible inputs for cv are:  * None, to use the default 5-fold cross validation, * integer, to specify the number of folds in a (Stratified) KFold, * An object to be used as a cross-validation generator, * An iterable yielding train, test splits.  For integer/None inputs, if the estimator is a classifier and y is either binary or multiclass, `StratifiedKFold` is used. In all other cases, `KFold` is used.  Refer :ref:`User Guide <cross_validation>` for the various cross-validation strategies that can be used here.  .. note::    A larger number of split will provide no benefits if the number    of training samples is large enough. Indeed, the training time    will increase. ``cv`` is not used for model evaluation but for    prediction.",
                    "param_type": [
                        "int",
                        "iter",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for `fit` of all `estimators`. `None` means 1 unless in a `joblib.parallel_backend` context. -1 means using all processors. See Glossary for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "passthrough",
                    "docstring": "When False, only the predictions of estimators will be used as training data for `final_estimator`. When True, the `final_estimator` is trained on the predictions as well as the original training data.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "Verbosity level.",
                    "param_type": [
                        "int"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "0",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "estimators_",
                    "docstring": "The elements of the estimators parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators_`.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "named_estimators_",
                    "docstring": "Attribute to access any fitted sub-estimators by name.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "final_estimator_",
                    "docstring": "The regressor to stacked the base estimators fitted.",
                    "param_type": [
                        null
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_clone_final_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_concatenate_predictions",
                    "docstring": "Concatenate the predictions of each first layer learner and\n        possibly the input dataset `X`.\n\n        If `X` is sparse and `self.passthrough` is False, the output of\n        `transform` will be dense (the predictions). If `X` is sparse\n        and `self.passthrough` is True, the output of `transform` will\n        be sparse.\n\n        This helper is in charge of ensuring the predictions are 2D arrays and\n        it will drop one of the probability column when using probabilities\n        in the binary case. Indeed, the p(y|c=0) = 1 - p(y|c=1)\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_method_name",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_replace_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_sk_visual_block_",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_transform",
                    "docstring": "Concatenate and return the predictions of the estimators.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimators",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_final_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_names",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "fit",
                    "docstring": "Fit the estimators.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like of shape (n_samples,)\n            Target values.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if all underlying estimators\n            support sample weights.\n\n        Returns\n        -------\n        self : object\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_transform",
                    "docstring": "\n        Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n\n        y : ndarray of shape (n_samples,), default=None\n            Target values.\n\n        **fit_params : dict\n            Additional fit parameters.\n\n        Returns\n        -------\n        X_new : ndarray array of shape (n_samples, n_features_new)\n            Transformed array.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "**fit_params",
                            "docstring": "Additional fit parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_new",
                            "docstring": "Transformed array.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get the parameters of an estimator from the ensemble.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            Setting it to True gets the various classifiers and the parameters\n            of the classifiers as well.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "Setting it to True gets the various classifiers and the parameters of the classifiers as well.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "predict",
                    "docstring": "Predict target for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        **predict_params : dict of str -> obj\n            Parameters to the `predict` called by the `final_estimator`. Note\n            that this may be used to return uncertainties from some estimators\n            with `return_std` or `return_cov`. Be aware that it will only\n            accounts for uncertainty in the final estimator.\n\n        Returns\n        -------\n        y_pred : ndarray of shape (n_samples,) or (n_samples, n_output)\n            Predicted targets.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "**predict_params",
                            "docstring": "Parameters to the `predict` called by the `final_estimator`. Note that this may be used to return uncertainties from some estimators with `return_std` or `return_cov`. Be aware that it will only accounts for uncertainty in the final estimator.",
                            "param_type": [
                                "str",
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y_pred",
                            "docstring": "Predicted targets.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of an estimator from the ensemble.\n\n        Valid parameter keys can be listed with `get_params()`.\n\n        Parameters\n        ----------\n        **params : keyword arguments\n            Specific parameters using e.g.\n            `set_params(parameter_name=new_value)`. In addition, to setting the\n            parameters of the stacking estimator, the individual estimator of\n            the stacking estimators can also be set, or can be removed by\n            setting them to 'drop'.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Specific parameters using e.g. `set_params(parameter_name=new_value)`. In addition, to setting the parameters of the stacking estimator, the individual estimator of the stacking estimators can also be set, or can be removed by setting them to 'drop'.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "transform",
                    "docstring": "Return the predictions for X for each estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where `n_samples` is the number of samples and\n            `n_features` is the number of features.\n\n        Returns\n        -------\n        y_preds : ndarray of shape (n_samples, n_estimators)\n            Prediction outputs for each estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y_preds",
                            "docstring": "Prediction outputs for each estimator.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "VotingClassifier",
            "docstring": "Soft Voting/Majority Rule classifier for unfitted estimators.\n\n    .. versionadded:: 0.17\n\n    Read more in the :ref:`User Guide <voting_classifier>`.\n\n    Parameters\n    ----------\n    estimators : list of (str, estimator) tuples\n        Invoking the ``fit`` method on the ``VotingClassifier`` will fit clones\n        of those original estimators that will be stored in the class attribute\n        ``self.estimators_``. An estimator can be set to ``'drop'``\n        using ``set_params``.\n\n        .. versionchanged:: 0.21\n            ``'drop'`` is accepted.\n\n        .. deprecated:: 0.22\n           Using ``None`` to drop an estimator is deprecated in 0.22 and\n           support will be dropped in 0.24. Use the string ``'drop'`` instead.\n\n    voting : {'hard', 'soft'}, default='hard'\n        If 'hard', uses predicted class labels for majority rule voting.\n        Else if 'soft', predicts the class label based on the argmax of\n        the sums of the predicted probabilities, which is recommended for\n        an ensemble of well-calibrated classifiers.\n\n    weights : array-like of shape (n_classifiers,), default=None\n        Sequence of weights (`float` or `int`) to weight the occurrences of\n        predicted class labels (`hard` voting) or class probabilities\n        before averaging (`soft` voting). Uses uniform weights if `None`.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for ``fit``.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n        .. versionadded:: 0.18\n\n    flatten_transform : bool, default=True\n        Affects shape of transform output only when voting='soft'\n        If voting='soft' and flatten_transform=True, transform method returns\n        matrix with shape (n_samples, n_classifiers * n_classes). If\n        flatten_transform=False, it returns\n        (n_classifiers, n_samples, n_classes).\n\n    verbose : bool, default=False\n        If True, the time elapsed while fitting will be printed as it\n        is completed.\n\n    Attributes\n    ----------\n    estimators_ : list of classifiers\n        The collection of fitted sub-estimators as defined in ``estimators``\n        that are not 'drop'.\n\n    named_estimators_ : :class:`~sklearn.utils.Bunch`\n        Attribute to access any fitted sub-estimators by name.\n\n        .. versionadded:: 0.20\n\n    classes_ : array-like of shape (n_predictions,)\n        The classes labels.\n\n    See Also\n    --------\n    VotingRegressor: Prediction voting regressor.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.linear_model import LogisticRegression\n    >>> from sklearn.naive_bayes import GaussianNB\n    >>> from sklearn.ensemble import RandomForestClassifier, VotingClassifier\n    >>> clf1 = LogisticRegression(multi_class='multinomial', random_state=1)\n    >>> clf2 = RandomForestClassifier(n_estimators=50, random_state=1)\n    >>> clf3 = GaussianNB()\n    >>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])\n    >>> y = np.array([1, 1, 1, 2, 2, 2])\n    >>> eclf1 = VotingClassifier(estimators=[\n    ...         ('lr', clf1), ('rf', clf2), ('gnb', clf3)], voting='hard')\n    >>> eclf1 = eclf1.fit(X, y)\n    >>> print(eclf1.predict(X))\n    [1 1 1 2 2 2]\n    >>> np.array_equal(eclf1.named_estimators_.lr.predict(X),\n    ...                eclf1.named_estimators_['lr'].predict(X))\n    True\n    >>> eclf2 = VotingClassifier(estimators=[\n    ...         ('lr', clf1), ('rf', clf2), ('gnb', clf3)],\n    ...         voting='soft')\n    >>> eclf2 = eclf2.fit(X, y)\n    >>> print(eclf2.predict(X))\n    [1 1 1 2 2 2]\n    >>> eclf3 = VotingClassifier(estimators=[\n    ...        ('lr', clf1), ('rf', clf2), ('gnb', clf3)],\n    ...        voting='soft', weights=[2,1,1],\n    ...        flatten_transform=True)\n    >>> eclf3 = eclf3.fit(X, y)\n    >>> print(eclf3.predict(X))\n    [1 1 1 2 2 2]\n    >>> print(eclf3.transform(X).shape)\n    (6, 6)\n    ",
            "inputs": [
                {
                    "name": "estimators",
                    "docstring": "Invoking the ``fit`` method on the ``VotingClassifier`` will fit clones of those original estimators that will be stored in the class attribute ``self.estimators_``. An estimator can be set to ``'drop'`` using ``set_params``.  .. versionchanged:: 0.21     ``'drop'`` is accepted.  .. deprecated:: 0.22    Using ``None`` to drop an estimator is deprecated in 0.22 and    support will be dropped in 0.24. Use the string ``'drop'`` instead.",
                    "param_type": [
                        "str",
                        "list",
                        "tuple"
                    ],
                    "expected_shape": null,
                    "is_optional": false,
                    "default_value": null,
                    "options": null
                },
                {
                    "name": "voting",
                    "docstring": "If 'hard', uses predicted class labels for majority rule voting. Else if 'soft', predicts the class label based on the argmax of the sums of the predicted probabilities, which is recommended for an ensemble of well-calibrated classifiers.",
                    "param_type": [
                        "LIST_VALID_OPTIONS"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "hard",
                    "options": [
                        "hard",
                        "soft",
                        "default=hard"
                    ]
                },
                {
                    "name": "weights",
                    "docstring": "Sequence of weights (`float` or `int`) to weight the occurrences of predicted class labels (`hard` voting) or class probabilities before averaging (`soft` voting). Uses uniform weights if `None`.",
                    "param_type": [
                        "array",
                        null
                    ],
                    "expected_shape": "(n_classifiers,), default=None",
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for ``fit``. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.  .. versionadded:: 0.18",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "flatten_transform",
                    "docstring": "Affects shape of transform output only when voting='soft' If voting='soft' and flatten_transform=True, transform method returns matrix with shape (n_samples, n_classifiers * n_classes). If flatten_transform=False, it returns (n_classifiers, n_samples, n_classes).",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "True",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "If True, the time elapsed while fitting will be printed as it is completed.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators as defined in ``estimators`` that are not 'drop'.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "named_estimators_",
                    "docstring": "Attribute to access any fitted sub-estimators by name.  .. versionadded:: 0.20",
                    "param_type": [
                        null
                    ],
                    "returned": false
                },
                {
                    "name": "classes_",
                    "docstring": "The classes labels.",
                    "param_type": [
                        "array",
                        "dict"
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_collect_probas",
                    "docstring": "Collect results from clf.predict calls.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_log_message",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_predict",
                    "docstring": "Collect results from clf.predict calls.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_predict_proba",
                    "docstring": "Predict class probabilities for X in 'soft' voting.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_replace_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_sk_visual_block_",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimators",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_names",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "fit",
                    "docstring": "Fit the estimators.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like of shape (n_samples,)\n            Target values.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if all underlying estimators\n            support sample weights.\n\n            .. versionadded:: 0.18\n\n        Returns\n        -------\n        self : object\n\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.  .. versionadded:: 0.18",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_transform",
                    "docstring": "\n        Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n\n        y : ndarray of shape (n_samples,), default=None\n            Target values.\n\n        **fit_params : dict\n            Additional fit parameters.\n\n        Returns\n        -------\n        X_new : ndarray array of shape (n_samples, n_features_new)\n            Transformed array.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "**fit_params",
                            "docstring": "Additional fit parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_new",
                            "docstring": "Transformed array.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get the parameters of an estimator from the ensemble.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            Setting it to True gets the various classifiers and the parameters\n            of the classifiers as well.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "Setting it to True gets the various classifiers and the parameters of the classifiers as well.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "predict",
                    "docstring": "Predict class labels for X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n\n        Returns\n        -------\n        maj : array-like of shape (n_samples,)\n            Predicted class labels.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "maj",
                            "docstring": "Predicted class labels.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "\n        Return the mean accuracy on the given test data and labels.\n\n        In multi-label classification, this is the subset accuracy\n        which is a harsh metric since you require for each sample that\n        each label set be correctly predicted.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True labels for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            Mean accuracy of self.predict(X) wrt. y.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True labels for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "Mean accuracy of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of an estimator from the ensemble.\n\n        Valid parameter keys can be listed with `get_params()`.\n\n        Parameters\n        ----------\n        **params : keyword arguments\n            Specific parameters using e.g.\n            `set_params(parameter_name=new_value)`. In addition, to setting the\n            parameters of the stacking estimator, the individual estimator of\n            the stacking estimators can also be set, or can be removed by\n            setting them to 'drop'.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Specific parameters using e.g. `set_params(parameter_name=new_value)`. In addition, to setting the parameters of the stacking estimator, the individual estimator of the stacking estimators can also be set, or can be removed by setting them to 'drop'.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "transform",
                    "docstring": "Return class labels or probabilities for X for each estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        Returns\n        -------\n        probabilities_or_labels\n            If `voting='soft'` and `flatten_transform=True`:\n                returns ndarray of shape (n_classifiers, n_samples *\n                n_classes), being class probabilities calculated by each\n                classifier.\n            If `voting='soft' and `flatten_transform=False`:\n                ndarray of shape (n_classifiers, n_samples, n_classes)\n            If `voting='hard'`:\n                ndarray of shape (n_samples, n_classifiers), being\n                class labels predicted by each classifier.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "docstring": "If `voting='soft'` and `flatten_transform=True`:     returns ndarray of shape (n_classifiers, n_samples *     n_classes), being class probabilities calculated by each     classifier. If `voting='soft' and `flatten_transform=False`:     ndarray of shape (n_classifiers, n_samples, n_classes) If `voting='hard'`:     ndarray of shape (n_samples, n_classifiers), being     class labels predicted by each classifier.",
                            "param_type": [
                                null
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        },
        {
            "name": "VotingRegressor",
            "docstring": "Prediction voting regressor for unfitted estimators.\n\n    .. versionadded:: 0.21\n\n    A voting regressor is an ensemble meta-estimator that fits several base\n    regressors, each on the whole dataset. Then it averages the individual\n    predictions to form a final prediction.\n\n    Read more in the :ref:`User Guide <voting_regressor>`.\n\n    Parameters\n    ----------\n    estimators : list of (str, estimator) tuples\n        Invoking the ``fit`` method on the ``VotingRegressor`` will fit clones\n        of those original estimators that will be stored in the class attribute\n        ``self.estimators_``. An estimator can be set to ``'drop'`` using\n        ``set_params``.\n\n        .. versionchanged:: 0.21\n            ``'drop'`` is accepted.\n\n        .. deprecated:: 0.22\n           Using ``None`` to drop an estimator is deprecated in 0.22 and\n           support will be dropped in 0.24. Use the string ``'drop'`` instead.\n\n    weights : array-like of shape (n_regressors,), default=None\n        Sequence of weights (`float` or `int`) to weight the occurrences of\n        predicted values before averaging. Uses uniform weights if `None`.\n\n    n_jobs : int, default=None\n        The number of jobs to run in parallel for ``fit``.\n        ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context.\n        ``-1`` means using all processors. See :term:`Glossary <n_jobs>`\n        for more details.\n\n    verbose : bool, default=False\n        If True, the time elapsed while fitting will be printed as it\n        is completed.\n\n    Attributes\n    ----------\n    estimators_ : list of regressors\n        The collection of fitted sub-estimators as defined in ``estimators``\n        that are not 'drop'.\n\n    named_estimators_ : Bunch\n        Attribute to access any fitted sub-estimators by name.\n\n        .. versionadded:: 0.20\n\n    See Also\n    --------\n    VotingClassifier: Soft Voting/Majority Rule classifier.\n\n    Examples\n    --------\n    >>> import numpy as np\n    >>> from sklearn.linear_model import LinearRegression\n    >>> from sklearn.ensemble import RandomForestRegressor\n    >>> from sklearn.ensemble import VotingRegressor\n    >>> r1 = LinearRegression()\n    >>> r2 = RandomForestRegressor(n_estimators=10, random_state=1)\n    >>> X = np.array([[1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36]])\n    >>> y = np.array([2, 6, 12, 20, 30, 42])\n    >>> er = VotingRegressor([('lr', r1), ('rf', r2)])\n    >>> print(er.fit(X, y).predict(X))\n    [ 3.3  5.7 11.8 19.7 28.  40.3]\n    ",
            "inputs": [
                {
                    "name": "estimators",
                    "docstring": "Invoking the ``fit`` method on the ``VotingRegressor`` will fit clones of those original estimators that will be stored in the class attribute ``self.estimators_``. An estimator can be set to ``'drop'`` using ``set_params``.  .. versionchanged:: 0.21     ``'drop'`` is accepted.  .. deprecated:: 0.22    Using ``None`` to drop an estimator is deprecated in 0.22 and    support will be dropped in 0.24. Use the string ``'drop'`` instead.",
                    "param_type": [
                        "str",
                        "list",
                        "tuple"
                    ],
                    "expected_shape": null,
                    "is_optional": false,
                    "default_value": null,
                    "options": null
                },
                {
                    "name": "weights",
                    "docstring": "Sequence of weights (`float` or `int`) to weight the occurrences of predicted values before averaging. Uses uniform weights if `None`.",
                    "param_type": [
                        "array",
                        null
                    ],
                    "expected_shape": "(n_regressors,), default=None",
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "n_jobs",
                    "docstring": "The number of jobs to run in parallel for ``fit``. ``None`` means 1 unless in a :obj:`joblib.parallel_backend` context. ``-1`` means using all processors. See :term:`Glossary <n_jobs>` for more details.",
                    "param_type": [
                        "int",
                        null
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "None",
                    "options": null
                },
                {
                    "name": "verbose",
                    "docstring": "If True, the time elapsed while fitting will be printed as it is completed.",
                    "param_type": [
                        "bool"
                    ],
                    "expected_shape": null,
                    "is_optional": true,
                    "default_value": "False",
                    "options": null
                }
            ],
            "outputs": [
                {
                    "name": "estimators_",
                    "docstring": "The collection of fitted sub-estimators as defined in ``estimators`` that are not 'drop'.",
                    "param_type": [
                        "list"
                    ],
                    "returned": false
                },
                {
                    "name": "named_estimators_",
                    "docstring": "Attribute to access any fitted sub-estimators by name.  .. versionadded:: 0.20",
                    "param_type": [
                        null
                    ],
                    "returned": false
                }
            ],
            "node_functions": [
                {
                    "name": "__init__",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_check_n_features",
                    "docstring": "Set the `n_features_in_` attribute, or check against it.\n\n        Parameters\n        ----------\n        X : {ndarray, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n        reset : bool\n            If True, the `n_features_in_` attribute is set to `X.shape[1]`.\n            Else, the attribute must already exist and the function checks\n            that it is equal to `X.shape[1]`.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "ndarray",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "reset",
                            "docstring": "If True, the `n_features_in_` attribute is set to `X.shape[1]`. Else, the attribute must already exist and the function checks that it is equal to `X.shape[1]`.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "_get_param_names",
                    "docstring": "Get parameter names for the estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_get_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_log_message",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_more_tags",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_predict",
                    "docstring": "Collect results from clf.predict calls.",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_replace_estimator",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_html_inner",
                    "docstring": "This function is returned by the @property `_repr_html_` to make\n        `hasattr(estimator, \"_repr_html_\") return `True` or `False` depending\n        on `get_config()[\"display\"]`.\n        ",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_repr_mimebundle_",
                    "docstring": "Mime bundle used by jupyter kernels to display estimator",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_set_params",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_sk_visual_block_",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_data",
                    "docstring": "Validate input data and set or check the `n_features_in_` attribute.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n            The input samples.\n        y : array-like of shape (n_samples,), default=None\n            The targets. If None, `check_array` is called on `X` and\n            `check_X_y` is called otherwise.\n        reset : bool, default=True\n            Whether to reset the `n_features_in_` attribute.\n            If False, the input will be checked for consistency with data\n            provided when reset was last True.\n        validate_separately : False or tuple of dicts, default=False\n            Only used if y is not None.\n            If False, call validate_X_y(). Else, it must be a tuple of kwargs\n            to be used for calling check_array() on X and y respectively.\n        **check_params : kwargs\n            Parameters passed to :func:`sklearn.utils.check_array` or\n            :func:`sklearn.utils.check_X_y`. Ignored if validate_separately\n            is not False.\n\n        Returns\n        -------\n        out : {ndarray, sparse matrix} or tuple of these\n            The validated input. A tuple is returned if `y` is not None.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "The targets. If None, `check_array` is called on `X` and `check_X_y` is called otherwise.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "reset",
                            "docstring": "Whether to reset the `n_features_in_` attribute. If False, the input will be checked for consistency with data provided when reset was last True.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        },
                        {
                            "name": "validate_separately",
                            "docstring": "Only used if y is not None. If False, call validate_X_y(). Else, it must be a tuple of kwargs to be used for calling check_array() on X and y respectively.",
                            "param_type": [
                                "dict",
                                "tuple"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "False",
                            "options": null
                        },
                        {
                            "name": "**check_params",
                            "docstring": "Parameters passed to :func:`sklearn.utils.check_array` or :func:`sklearn.utils.check_X_y`. Ignored if validate_separately is not False.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "out",
                            "docstring": "The validated input. A tuple is returned if `y` is not None.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "tuple"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "_validate_estimators",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "_validate_names",
                    "docstring": "None",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "fit",
                    "docstring": "Fit the estimators.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            Training vectors, where n_samples is the number of samples and\n            n_features is the number of features.\n\n        y : array-like of shape (n_samples,)\n            Target values.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights. If None, then samples are equally weighted.\n            Note that this is supported only if all underlying estimators\n            support sample weights.\n\n        Returns\n        -------\n        self : object\n            Fitted estimator.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Training vectors, where n_samples is the number of samples and n_features is the number of features.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights. If None, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "fit_transform",
                    "docstring": "\n        Fit to data, then transform it.\n\n        Fits transformer to X and y with optional parameters fit_params\n        and returns a transformed version of X.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix, dataframe} of shape                 (n_samples, n_features)\n\n        y : ndarray of shape (n_samples,), default=None\n            Target values.\n\n        **fit_params : dict\n            Additional fit parameters.\n\n        Returns\n        -------\n        X_new : ndarray array of shape (n_samples, n_features_new)\n            Transformed array.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array",
                                "dataframe"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix",
                                "dataframe of shape                 (n_samples",
                                "n_features)"
                            ]
                        },
                        {
                            "name": "y",
                            "docstring": "Target values.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        },
                        {
                            "name": "**fit_params",
                            "docstring": "Additional fit parameters.",
                            "param_type": [
                                "dict"
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "X_new",
                            "docstring": "Transformed array.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "get_params",
                    "docstring": "\n        Get the parameters of an estimator from the ensemble.\n\n        Parameters\n        ----------\n        deep : bool, default=True\n            Setting it to True gets the various classifiers and the parameters\n            of the classifiers as well.\n        ",
                    "inputs": [
                        {
                            "name": "deep",
                            "docstring": "Setting it to True gets the various classifiers and the parameters of the classifiers as well.",
                            "param_type": [
                                "bool"
                            ],
                            "expected_shape": null,
                            "is_optional": true,
                            "default_value": "True",
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "predict",
                    "docstring": "Predict regression target for X.\n\n        The predicted regression target of an input sample is computed as the\n        mean predicted regression targets of the estimators in the ensemble.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n\n        Returns\n        -------\n        y : ndarray of shape (n_samples,)\n            The predicted values.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "y",
                            "docstring": "The predicted values.",
                            "param_type": [
                                "array"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "score",
                    "docstring": "Return the coefficient of determination R^2 of the prediction.\n\n        The coefficient R^2 is defined as (1 - u/v), where u is the residual\n        sum of squares ((y_true - y_pred) ** 2).sum() and v is the total\n        sum of squares ((y_true - y_true.mean()) ** 2).sum().\n        The best possible score is 1.0 and it can be negative (because the\n        model can be arbitrarily worse). A constant model that always\n        predicts the expected value of y, disregarding the input features,\n        would get a R^2 score of 0.0.\n\n        Parameters\n        ----------\n        X : array-like of shape (n_samples, n_features)\n            Test samples. For some estimators this may be a\n            precomputed kernel matrix or a list of generic objects instead,\n            shape = (n_samples, n_samples_fitted),\n            where n_samples_fitted is the number of\n            samples used in the fitting for the estimator.\n\n        y : array-like of shape (n_samples,) or (n_samples, n_outputs)\n            True values for X.\n\n        sample_weight : array-like of shape (n_samples,), default=None\n            Sample weights.\n\n        Returns\n        -------\n        score : float\n            R^2 of self.predict(X) wrt. y.\n\n        Notes\n        -----\n        The R2 score used when calling ``score`` on a regressor uses\n        ``multioutput='uniform_average'`` from version 0.23 to keep consistent\n        with default value of :func:`~sklearn.metrics.r2_score`.\n        This influences the ``score`` method of all the multioutput\n        regressors (except for\n        :class:`~sklearn.multioutput.MultiOutputRegressor`).\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead, shape = (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "y",
                            "docstring": "True values for X.",
                            "param_type": [
                                "array"
                            ],
                            "expected_shape": "(n_samples,) or (n_samples, n_outputs)",
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        },
                        {
                            "name": "sample_weight",
                            "docstring": "Sample weights.",
                            "param_type": [
                                "array",
                                null
                            ],
                            "expected_shape": "(n_samples,), default=None",
                            "is_optional": true,
                            "default_value": "None",
                            "options": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "score",
                            "docstring": "R^2 of self.predict(X) wrt. y.",
                            "param_type": [
                                "float"
                            ],
                            "returned": true
                        }
                    ]
                },
                {
                    "name": "set_params",
                    "docstring": "\n        Set the parameters of an estimator from the ensemble.\n\n        Valid parameter keys can be listed with `get_params()`.\n\n        Parameters\n        ----------\n        **params : keyword arguments\n            Specific parameters using e.g.\n            `set_params(parameter_name=new_value)`. In addition, to setting the\n            parameters of the stacking estimator, the individual estimator of\n            the stacking estimators can also be set, or can be removed by\n            setting them to 'drop'.\n        ",
                    "inputs": [
                        {
                            "name": "**params",
                            "docstring": "Specific parameters using e.g. `set_params(parameter_name=new_value)`. In addition, to setting the parameters of the stacking estimator, the individual estimator of the stacking estimators can also be set, or can be removed by setting them to 'drop'.",
                            "param_type": [
                                null
                            ],
                            "expected_shape": null,
                            "is_optional": false,
                            "default_value": null,
                            "options": null
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "transform",
                    "docstring": "Return predictions for X for each estimator.\n\n        Parameters\n        ----------\n        X : {array-like, sparse matrix} of shape (n_samples, n_features)\n            The input samples.\n\n        Returns\n        -------\n        predictions: ndarray of shape (n_samples, n_classifiers)\n            Values predicted by each regressor.\n        ",
                    "inputs": [
                        {
                            "name": "X",
                            "docstring": "The input samples.",
                            "param_type": [
                                "LIST_VALID_OPTIONS",
                                "array"
                            ],
                            "expected_shape": "(n_samples, n_features)",
                            "is_optional": false,
                            "default_value": null,
                            "options": [
                                "array-like",
                                "sparse matrix of shape (n_samples",
                                "n_features)"
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "docstring": "Values predicted by each regressor.",
                            "param_type": [
                                "array",
                                "dict"
                            ],
                            "returned": true
                        }
                    ]
                }
            ],
            "nodes": []
        }
    ],
    "library": "sklearn",
    "module": "ensemble"
}